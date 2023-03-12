/**
 *     Title: App Development Project
 *     Purpose: ListExpenseScreen output a list of the expenses wit.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React, { useEffect, useState } from 'react';
import { FlatList, View, Text,StyleSheet } from 'react-native';
import ExpenseItem from './components/ExpenseItem';
import {getTotalBalance, getExpenses, getIncome} from './components/GetBalance';

const ListExpenseScreen = () => {

  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);

  // Extract expenses from the database
  useEffect(() => {
    getExpenses().then((data) => {
      setExpenses(data);
    });

    getTotalBalance().then((data) => {
      setTotal(data);
    });
  }, []);

  // Get total from database  
  useEffect(() => {
    getIncome().then((value) => {
      setIncome(value);
    });
  }, []);

  // Function to compute the difference
  const getDifference = (x, y) => {
    return x - y;
  };
  // ompute the balance 
  const balance = getDifference(income, total);

  return (
    <View style={styles.container}>
      {/* Create a header title */}
      <Text style={{ fontSize: 20,textDecorationLine: 'underline', fontWeight: 'bold', marginBottom: 16, marginTop: 16, color: '#002133'}}>
          List of added Expenses:
      </Text>

      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderItem}>Name</Text>
        <Text style={styles.tableHeaderItem}>Amount</Text>
        <Text style={styles.tableHeaderItem}>Date</Text>
      </View>

      {/* List all added expenses */}
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={item => item.id.toString()}
      />
      {/* Output total expenses */}
      <View style={styles.balanceContainer}>
      <Text style={styles.balanceLabel}>Your income:   ${income}</Text>
      <Text style={styles.balanceLabel}>Total Spent:     ${total}</Text>
      <Text style={styles.balanceLabel}>Balance:      ${balance} </Text>
      </View>
     </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tableHeaderItem: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  balanceContainer:{
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 10, 
    marginBottom: 10, 
    color: '#002133',
    borderWidth: 3,
    borderColor: '#C59A4A',
    alignItems: 'center',
    padding: 15,
  },
  balanceLabel:{
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 16, 
    color: '#002133'
  }
});
// Returns the ListExpenseScreen
export default ListExpenseScreen;


