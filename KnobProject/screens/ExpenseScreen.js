/**
 *     Title: App Development Project
 *     Purpose: ExpenseScreen creates a new screen for the expense input from user.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text,TouchableOpacity, Button} from 'react-native';
import getDb from './database';
import {getTotalBalance, getExpenses, getIncome} from './components/GetBalance';

const ExpenseScreen = () => {
  // initialize expense and income
  const [expense, setExpense] = useState({ name: '', amount: 0 });
  const [income, setIncome] = useState(0);

  const db = getDb();

  // Retrieve the income value from the database on component mount
  useEffect(() => {
    getIncome().then((value) => {
      setIncome(value);
    });
  }, []);

  // Function to update the income value 
  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  // Function to save the income value to the database when the user adds it
  const handleSaveIncome = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO income (amount) VALUES (?)',
        [income],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Income saved successfully');
          } else {
            console.log('Failed to save income');
          }
        }
      );
    });
  };

  // Function to take care of adding expenses to the database
  const handleAddExpense = async () => {
    const { name, amount } = expense;
    const date = new Date().toISOString();
  
    // Adds expenses to the database
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO expenseDB (name, amount, date) VALUES (?, ?, ?)',
        [name, amount, date],
        (_, result) => {
          console.log('New expense added with ID: ' + result.insertId);
        },
        (_, error) => {
          console.log('Error adding expense: ' + error);
        }
      );
    });
  
    setExpense({ name: '', amount: 0 });
  };
  
  // Screen view return by the screen
  return (
    <View style={styles.container}>
      {/* Income field */}
      <View style={styles.incomeContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter income"
          keyboardType="numeric"
          value={income.toString()}
          onChangeText={handleIncomeChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveIncome}>
          <Text style={styles.buttonText}>Save Income</Text>
        </TouchableOpacity>
      </View>
      {/* Adding expenses */}
      <Text style={styles.text}>Add an Expense</Text>
      {/* Expense name input filed */}
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        onChangeText={(text) => setExpense({ ...expense, name: text })}
        value={expense.name}
      />
      {/* Text field for expense amount */}
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        onChangeText={(text) =>
          setExpense({ ...expense, amount: parseFloat(text) || 0 })
        }
        value={expense.amount.toString()}
        keyboardType="numeric"
      />
      {/* Botton to add expense */}
      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
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
  incomeContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FB',
    marginBottom: 70,
    
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  incomeText:{
    fontSize: 20,
    marginBottom: 5,
  },
  incomeInput:{
    borderWidth: 1,
    borderColor: '#C59A4A',
    padding: 10,
    marginVertical: 10,
    marginBottom: 5,
    width: '80%',

  },
  input: {
    borderWidth: 1,
    borderColor: '#C59A4A',
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
    width: '80%',
  },
  button:{
    backgroundColor: '#08366B',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  incomeButton:{
    backgroundColor: '#08366B',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  IncomeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
// Returns the ExpenseScreen
export default ExpenseScreen;

