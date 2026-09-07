const { query } = require("../config/db");

let schemaPromise;

const profileColumns = [
  ["avatar_data", "avatar_data LONGTEXT NULL AFTER avatar_url"],
  ["career_interests", "career_interests JSON NULL AFTER target_role"],
  ["facebook_url", "facebook_url VARCHAR(500) NULL AFTER avatar_data"],
  ["instagram_url", "instagram_url VARCHAR(500) NULL AFTER facebook_url"],
  ["whatsapp", "whatsapp VARCHAR(20) NULL AFTER instagram_url"],
  ["twitter_url", "twitter_url VARCHAR(500) NULL AFTER whatsapp"],
  ["telegram", "telegram VARCHAR(32) NULL AFTER twitter_url"],
];

async function buildProfileSchema() {
  for (const [name, definition] of profileColumns) {
    const existing = await query(
      `SELECT 1
       FROM information_schema.columns
       WHERE table_schema = DATABASE()
         AND table_name = 'student_profiles'
         AND column_name = ?
       LIMIT 1`,
      [name],
    );
    if (!existing.length) {
      await query(`ALTER TABLE student_profiles ADD COLUMN ${definition}`);
    }
  }
}

async function ensureProfileSchema() {
  if (!schemaPromise) {
    schemaPromise = buildProfileSchema().catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }
  return schemaPromise;
}

module.exports = { ensureProfileSchema };
