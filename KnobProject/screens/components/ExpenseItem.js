/**
 *     Title: App Development Project
 *     Purpose: Expense Item function to output expense attributes.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

// Returns the expense name, amount and date seperated by space
const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.text}> {
        expense.name + 
        '                     $'
        + expense.amount + 
        '             '
        + new Date(expense.date).toLocaleDateString()
        }</Text>
    </View>
  );
};
// Create style for the text
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#002133',
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
// Returns the ExpenseItem
export default ExpenseItem;
