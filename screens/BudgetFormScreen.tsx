import React from 'react';
// import { View } from 'react-native';
import BudgetForm from '../components/BudgetForm';
import { StackNavigationProp } from '@react-navigation/stack'; 

type Props = {
  navigation: StackNavigationProp<any>; 
};

const BudgetFormScreen: React.FC<Props> = ({ navigation }) => {
  return (
    
      <BudgetForm />
    
  );
};

export default BudgetFormScreen;
