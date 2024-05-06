import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../src/components/SettingsScreen';
import GotasScreen from '../src/components/GotasScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SettingsScreen} />
        <Stack.Screen name="Gotas" component={GotasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
