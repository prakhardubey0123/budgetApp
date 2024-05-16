import React from 'react';
import BudgetList from '../components/BudgetList';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


type Props = {
  navigation: StackNavigationProp<any>; 
};

const BudgetListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BudgetList />
      <TouchableOpacity
        style={[styles.buttonContainer, styles.addButton]}
        onPress={() => navigation.navigate('BudgetEntry')}
      >
        <Text style={styles.buttonText}>➕</Text>    


      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#3c8c40', // Green color
  },
  buttonText: {
    color: '#fff', // White color for text
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
});

export default BudgetListScreen;
