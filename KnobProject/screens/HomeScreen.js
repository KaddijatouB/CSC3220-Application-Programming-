/**
 *     Title: App Development Project
 *     Purpose: HomeScreen add navigation to the expense and listExpense screens
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// Create a home screen navigation
const HomeScreen = ({ navigation }) => {
  // Navigate to the add expense screen
  const handleAddExpense = () => {
    navigation.navigate('AddExpense');
  };
  // Navigate to the list expense screen
  const handleViewExpenses = () => {
    navigation.navigate('ListExpenses');
  };
  return (
    <View style={styles.container}>
      {/* App name for title and subtitle */}
      <View style={styles.boxContainer}>
        <Text style={styles.title}>KNOB App</Text>
        <Text style={styles.subtitle}> Finance Management</Text>
      </View>
      
      {/* Botton to add expense */}
      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
      {/* Botton to list expense  */}
      <TouchableOpacity style={styles.button} onPress={handleViewExpenses}>
        <Text style={styles.buttonText}>View Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};
// Create stles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FB',
  },
  boxContainer:{
    borderWidth: 2,
    borderColor: '#C59A4A',
    padding: 30,
    borderRadius: 5,
    backgroundColor: '#F3F9FB',
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#211301',
  },
  subtitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8F7262',
  },
  button: {
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
// Returns the HomeScreen
export default HomeScreen;
