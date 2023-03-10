/**
 *     Title: App Development Project
 *     Purpose: ExpenseScreen creates a new screen for the expense input from user.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import getDb from './database';

const db = getDb();

const ExpenseScreen = () => {
  const [amount, setAmount] = useState('');
  const [name, setDescription] = useState('');
  // Adds expenses to the database
  const handleAddExpense = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO expenses (name, amount) VALUES (?, ?)',
        [name, amount],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            console.log(`Added expense with ID ${insertId}`);
            setDescription('');
            setAmount('');
          }
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add an Expense</Text>
      {/* Text field for expense amount */}
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      {/* Text field for expense name */}
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={name}
        placeholder="Enter description"
      />
      {/* Botton to add expense */}
      <Button 
        title="Add Expense" 
        color= '#08366B'
        onPress={handleAddExpense}
      />
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FB',
  },
  text: {
    fontStyle:'Cormorant Garamond Medium',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
});

export default ExpenseScreen;

