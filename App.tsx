import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetFormScreen from './screens/BudgetFormScreen';
import BudgetListScreen from './screens/BudgetListScreen';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const Stack = createStackNavigator();
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <View style={styles.container}>
            <Header title="Manage Budget" />
            <Stack.Navigator initialRouteName="BudgetEntryListing">
              <Stack.Screen name="BudgetEntry" component={BudgetFormScreen} options={{ title: 'Budget Entry' }} />
              <Stack.Screen name="BudgetEntryListing" component={BudgetListScreen} options={{ title: 'Budget Entry Listing' }} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
