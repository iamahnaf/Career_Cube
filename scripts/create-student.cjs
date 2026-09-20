require("dotenv").config();
const bcrypt = require("bcryptjs");
const { query, pool } = require("../server/src/config/db");

async function createStudent() {
  const name = "Ahnaf";
  const email = "ahnaf@careerforge.local";
  const password = "Password123!";
  const hash = await bcrypt.hash(password, 12);

  await query(
    `INSERT INTO users (name, email, password_hash, role, status)
     VALUES (?, ?, ?, 'student', 'active')
     ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), status = 'active'`,
    [name, email, hash]
  );

  const users = await query("SELECT id FROM users WHERE email = ?", [email]);
  const user = users[0];
  if (user) {
    await query(
      `INSERT INTO student_profiles (user_id, university, degree, graduation_year, target_role, bio)
       VALUES (?, 'United International University', 'B.Sc in CSE', 2026, 'Software Engineer', 'Computer Science student passionate about software engineering.')
       ON DUPLICATE KEY UPDATE university = VALUES(university)`,
      [user.id]
    );
  }

  console.log("STUDENT_CREATED_SUCCESS");
}

createStudent()
  .then(() => pool.end())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
