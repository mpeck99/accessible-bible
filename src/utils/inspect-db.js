import Database from "better-sqlite3";

const DB_PATH = "./bible.eng.db"; // path to your SQLite file
const db = new Database(DB_PATH, { readonly: true });

// 1️⃣ List all tables
console.log("Tables in the database:");
const tables = db
  .prepare("SELECT name FROM sqlite_master WHERE type='table'")
  .all();
tables.forEach((t) => console.log(" -", t.name));

// 2️⃣ List all translations
console.log("\nAvailable translations:");
const translations = db
  .prepare("SELECT id, shortName, name FROM Translation")
  .all();
translations.forEach((t) =>
  console.log(` - ${t.name} (${t.shortName}) → id: ${t.id}`)
);

// 3️⃣ Optionally, list some sample books for a translation
if (translations.length > 0) {
  const firstTranslationId = translations[0].id;
  console.log(`\nBooks in ${translations[0].name}:`);
  const books = db
    .prepare(
      `SELECT name, numberOfChapters FROM Book WHERE translationId = ? ORDER BY "order"`
    )
    .all(firstTranslationId);
  books.forEach((b) =>
    console.log(` - ${b.name} (${b.numberOfChapters} chapters)`)
  );
}

db.close();
