import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('expenses.db');

const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, expense REAL)'
      );
    });
};  

const getDb = () => {
  createTable();
  return db;
};

export default getDb;




  