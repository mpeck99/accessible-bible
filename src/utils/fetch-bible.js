// export-bible.js
import Database from "better-sqlite3";
import fs from "fs";

const DB_PATH = "./bible.eng.db"; // path to your database
const OUTPUT_DIR = "./data";
const TRANSLATION_ID = "eng_kjv"; // must match the ID in your DB

const db = new Database(DB_PATH, { readonly: true });

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

function fetchBible() {
  const bibleData = {};

  // Get all books for the translation
  const booksStmt = db.prepare(
    `SELECT * FROM Book WHERE translationId = ? ORDER BY "order"`
  );
  const books = booksStmt.all(TRANSLATION_ID);

  console.log(`Found ${books.length} books for translation: ${TRANSLATION_ID}`);

  for (const book of books) {
    console.log(`Processing book: ${book.commonName || book.name}...`);
    bibleData[book.commonName || book.name] = {};

    // Get chapters for this book
    const chaptersStmt = db.prepare(
      `SELECT * FROM Chapter WHERE bookId = ? AND translationId = ? ORDER BY number`
    );
    const chapters = chaptersStmt.all(book.id, TRANSLATION_ID);

    console.log(`  Found ${chapters.length} chapters`);

    for (const chapter of chapters) {
      bibleData[book.commonName || book.name][chapter.number] = {};

      // Get verses for this chapter
      const versesStmt = db.prepare(
        `SELECT * FROM ChapterVerse 
         WHERE bookId = ? AND chapterNumber = ? AND translationId = ? 
         ORDER BY number`
      );
      const verses = versesStmt.all(book.id, chapter.number, TRANSLATION_ID);

      console.log(`    Chapter ${chapter.number} has ${verses.length} verses`);

      for (const verse of verses) {
        bibleData[book.commonName || book.name][chapter.number][verse.number] =
          verse.text || "";
      }
    }
  }

  // Save JSON
  const outputPath = `${OUTPUT_DIR}/${TRANSLATION_ID}-full.json`;
  fs.writeFileSync(outputPath, JSON.stringify(bibleData, null, 2));
  console.log(`Saved Bible JSON: ${outputPath} ✅`);
}

try {
  fetchBible();
} catch (err) {
  console.error("Error exporting Bible:", err);
} finally {
  db.close();
}
