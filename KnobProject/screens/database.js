/**
 *     Title: App Development Project
 *     Purpose: Create a SQLite database table for expense and income android moblie App that tracks expenses tracker for budjecting.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import * as SQLite from 'expo-sqlite';
// Create a database called expenseDB
const db = SQLite.openDatabase('expenseDB.db');

// Create expense database table and the income tables
const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS expenseDB (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount REAL, date TEXT)'
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL);'
        );
    });
}; 
    
// Function to access database
const getDb = () => {
  createTable();
  return db;
};
// Return database
export default getDb;




  