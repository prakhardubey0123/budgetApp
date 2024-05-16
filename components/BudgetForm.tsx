import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../actions/actions';
import { useNavigation } from '@react-navigation/native';

const BudgetForm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [plannedAmount, setPlannedAmount] = useState('');
    const [actualAmount, setActualAmount] = useState('');
    const [itemNameError, setItemNameError] = useState('');
    const [plannedAmountError, setPlannedAmountError] = useState('');
    const [actualAmountError, setActualAmountError] = useState('');
  
    const handleSave = () => {
        let isValid = true;
        if (!itemName.trim()) {
            setItemNameError('Please enter the name of the item');
            isValid = false;
        } else {
            setItemNameError('');
        }
        if (!plannedAmount.trim() || isNaN(Number(plannedAmount)) || Number(plannedAmount) <= 0) {
            setPlannedAmountError('Please enter a valid planned amount');
            isValid = false;
        } else {
            setPlannedAmountError('');
        }
        if (!actualAmount.trim() || isNaN(Number(actualAmount)) || Number(actualAmount) <= 0) {
            setActualAmountError('Please enter a valid actual amount');
            isValid = false;
        } else {
            setActualAmountError('');
        }
        if (isValid) {
            dispatch(addBudgetEntry( itemName, parseFloat(plannedAmount), parseFloat(actualAmount) ));
            setItemName('');
            setPlannedAmount('');
            setActualAmount('');
            navigation.navigate('BudgetEntryListing');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name of the item</Text>
            <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={itemName}
                onChangeText={text => setItemName(text)}
            />
            {itemNameError ? <Text style={styles.error}>{itemNameError}</Text> : null}

            <Text style={styles.label}>Planned amount</Text>
            <TextInput
                style={styles.input}
                placeholder="Planned amount"
                value={plannedAmount}
                onChangeText={text => setPlannedAmount(text)}
                keyboardType="numeric"
            />
            {plannedAmountError ? <Text style={styles.error}>{plannedAmountError}</Text> : null}

            <Text style={styles.label}>Actual amount</Text>
            <TextInput
                style={styles.input}
                placeholder="Actual amount"
                value={actualAmount}
                onChangeText={text => setActualAmount(text)}
                keyboardType="numeric"
            />
            {actualAmountError ? <Text style={styles.error}>{actualAmountError}</Text> : null}

            <Button
                title="Save"
                onPress={handleSave}
                disabled={!itemName || !plannedAmount || !actualAmount}
                color="#3c8c40" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default BudgetForm;
