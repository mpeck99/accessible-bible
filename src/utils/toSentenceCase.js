/**
 * Convert a string to sentence case.
 * Capitalizes the first letter of each sentence, lowercases the rest.
 * @param {string} text
 * @returns {string}
 */
export function toSentenceCase(text) {
  return text
    .replace(/([^.!?]+[.!?]*)/g, (match) => {
      const trimmed = match.trim();
      if (!trimmed) return "";
      return (
        trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase() + " "
      );
    })
    .trim();
}
