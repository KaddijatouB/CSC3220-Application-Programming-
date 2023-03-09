/**
 * Expense 
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const ExpenseScreen = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddExpense = () => {
    // Handle adding expense to database or state
    console.log('Add expense clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add an Expense</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Enter description"
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
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
