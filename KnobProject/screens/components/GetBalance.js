/**
 *     Title: App Development Project
 *     Purpose: Computes expense balances, provies expenses and acess income
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import getDb from '../database';
const db = getDb();

// Function for the total amount of spending
const getTotalBalance = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT SUM(amount) FROM expenseDB',
        [],
        (_, result) => {
          resolve(result.rows._array[0]['SUM(amount)'] || 0);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// Function for get expenses 
const getExpenses = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM expenseDB ORDER BY id DESC',
            [],
            (_, result) => {
            resolve(result.rows._array);
            },
            (_, error) => {
            reject(error);
            }
        );
        });
    });
};
// Function to get the income saved
const getIncome = () => {
    const db = getDb();
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM income',
                [],
                (_, result) => {
                    if (result.rows.length > 0) {
                        const { amount } = result.rows.item(0);
                        resolve(amount);
                    } else {
                        resolve(0);
                    }
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};

// Returns   
export { getTotalBalance, getExpenses , getIncome};
  
