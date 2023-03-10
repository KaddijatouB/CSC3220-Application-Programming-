/**
 *     Title: App Development Project
 *     Purpose: Program to create an android moblie App that tracks expenses tracker for budjecting.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import getDb from './database';
import ExpenseItem from './components/ExpenseItem';

const db = getDb();

const ListExpenseScreen = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM expenses',
        [],
        (_, { rows }) => {
          setExpenses(rows._array);
        }
      );
    });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16}}>
          List of added Expenses:
        </Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={item => item.id.toString()}
      />
     </View>
  );
};

export default ListExpenseScreen;


