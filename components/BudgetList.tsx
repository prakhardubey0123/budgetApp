import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { List, Divider, Card, Button,Text } from 'react-native-paper';
import { deleteBudgetEntry } from '../actions/actions';

const BudgetList = () => {
  const budgetEntries = useSelector((state) => state.budgetEntries);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteBudgetEntry(index));
  };

  return (
    <ScrollView style={styles.container}>
      {budgetEntries.length === 0 ? (
        <Text>😔 No items</Text>
      ) : (
        budgetEntries.map((entry, index) => (
          <Card key={index} style={styles.card}>
            <Text>📌</Text>
            <Card.Content>
              <List.Item
                title={entry.itemName}
                description={`Rs. ${entry.actualAmount}`}
              />
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleDelete(index)}>Delete</Button>
            </Card.Actions>
          </Card>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    elevation: 4,
  },
});

export default BudgetList;
