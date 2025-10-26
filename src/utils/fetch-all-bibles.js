// fetch-selected-bibles.js
import Database from "better-sqlite3";
import fs from "fs";

const DB_FILE = "./bible.eng.db";
const OUTPUT_DIR = "./data";

// Make sure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

// Translations to export
const translations = [
  { id: "eng_kjv", abbr: "KJV", name: "King James (Authorized) Version " },
  { id: "eng_kja", abbr: "KJV+Apocrypha" name: "King James Version + Apocrypha "},
  { id: "eng_asv", abbr: "ASV" , name: "American Standard Version"},
  { id: "eng_web", abbr: "WEB", name: "World English Bible" },
];

const db = new Database(DB_FILE);

function fetchTranslationData(translationId) {
  const booksStmt = db.prepare(
    `SELECT * FROM Book WHERE translationId = ? ORDER BY "order"`
  );
  const chaptersStmt = db.prepare(
    `SELECT * FROM Chapter WHERE translationId = ? AND bookId = ? ORDER BY number`
  );
  const versesStmt = db.prepare(
    `SELECT * FROM ChapterVerse WHERE translationId = ? AND bookId = ? AND chapterNumber = ? ORDER BY number`
  );

  const books = booksStmt.all(translationId);
  const result = {};

  for (const book of books) {
    console.log(`  Processing book: ${book.name}...`);
    result[book.name] = {};
    const chapters = chaptersStmt.all(translationId, book.id);

    for (const chapter of chapters) {
      console.log(`    Processing chapter: ${chapter.number}...`);
      result[book.name][chapter.number] = {};
      const verses = versesStmt.all(translationId, book.id, chapter.number);

      for (const verse of verses) {
        result[book.name][chapter.number][verse.number] = verse.text;
      }
    }
  }

  return result;
}

// Export each translation
for (const t of translations) {
  console.log(`\nStarting export for translation: ${t.name} (${t.id})`);
  const data = fetchTranslationData(t.id);
  const filePath = `${OUTPUT_DIR}/${t.id}.json`;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Finished export and saved file: ${filePath} ✅`);
}

db.close();
console.log("\nAll selected translations exported successfully!");
