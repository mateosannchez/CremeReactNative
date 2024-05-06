import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <HomeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  
});

