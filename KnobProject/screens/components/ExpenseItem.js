/**
 *     Title: App Development Project
 *     Purpose: To allow the list of expense to expense items.
 *     Class: CSC3220 Applications Programming- Winter 2023
 *     Author: Kaddijatou Baldeh, Kendrick Bynum, Ian Wilson and Yassin Ali
 */

import React from 'react';
import { View, Text } from 'react-native';

const ExpenseItem = ({ expense }) => {
  return (
    <View>
      <Text>{expense.name}</Text>
      <Text>{expense.amount}</Text>
    </View>
  );
};

export default ExpenseItem;
