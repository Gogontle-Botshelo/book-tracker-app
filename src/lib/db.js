import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.sqlite');
console.log('Database initialized');

// Wrap table creation in a Promise to ensure completion
const initDatabase = new Promise((resolve, reject) => {
  db.run(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT,
      status TEXT NOT NULL,
      date_added TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Error creating books table:', err);
      reject(err);
    } else {
      console.log('Books table created');
      resolve();
    }
  });
});

// Export a function that waits for initialization
export default {
  init: async () => {
    await initDatabase;
    return {
      prepare: (query) => ({
        all: () => new Promise((resolve, reject) => {
          db.all(query, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
        }),
        run: (...params) => new Promise((resolve, reject) => {
          db.run(query, params, (err) => {
            if (err) reject(err);
            else resolve();
          });
        })
      })
    };
  }
};