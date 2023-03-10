/**
 *     Title: App Development Project
 *     Purpose: Program to create an android moblie App that tracks expenses tracker for budjecting.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import ListExpenseScreen from './screens/ListExpenseScreen';

const Stack = createStackNavigator();
// Main method: allows navigation to different screens
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
         {/* Expense Screen */}
        <Stack.Screen
          name="AddExpense"
          component={ExpenseScreen}
          options={{ title: 'Add Expense' }}
        />
         {/* List of expenses Screen */}
        <Stack.Screen
          name="ListExpenses"
          component={ListExpenseScreen}
          options={{ title: 'List Expenses' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

