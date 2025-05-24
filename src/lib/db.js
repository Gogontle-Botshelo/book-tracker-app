import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.sqlite');
console.log('Database initialized');

try {
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
    } else {
      console.log('Books table created');
    }
  });
} catch (error) {
  console.error('Error initializing database:', error);
  throw error;
}

const dbModule = {
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

console.log('Exporting dbModule:', dbModule);

export default dbModule;