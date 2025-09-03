import mysql from "mysql2/promise";

let connection: mysql.Connection | null = null;

export async function connectDB() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //   ssl: { rejectUnauthorized: true },
    });

    console.log("MySQL connected");

    // Auto-create schools table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        contact VARCHAR(20) UNIQUE NOT NULL,
        image TEXT
      )
    `);

    console.log("Table 'schools' checked/created");
  }

  return connection;
}
