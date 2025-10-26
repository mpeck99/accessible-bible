// fetch-translations.js
import Database from "better-sqlite3";

const db = new Database("./bible.eng.db", { readonly: true });

function getAllTranslations() {
  const stmt = db.prepare("SELECT id, name FROM Translation");
  const translations = stmt.all(); // returns an array of objects
  return translations;
}

const translations = getAllTranslations();
console.log("Translations in database:");
translations.forEach((t) => {
  console.log(`- ${t.name} → id: ${t.id}`);
});

db.close();
