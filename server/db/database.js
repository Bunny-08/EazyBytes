import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "./db/portfolio.db",
  driver: sqlite3.Database,
});


export const initDB = async () => {
  const db = new sqlite3.Database(process.env.DB_PATH || "./db/portfolio.db");

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      image TEXT,
      tech TEXT
    );`);
  });

  return {
    run: (query, params = []) => new Promise((resolve, reject) => {
      db.run(query, params, function (err) {
        if (err) reject(err);
        else resolve(this);
      });
    }),
    get: (query, params = []) => new Promise((resolve, reject) => {
      db.get(query, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    }),
    all: (query, params = []) => new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    })
  };
};