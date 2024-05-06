import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import HeaderScreen from './HeaderScreen';
import SettingsScreen from './SettingsScreen';

const HomeScreen = () => {

    return (
        <ScrollView>
            <HeaderScreen />
            <SettingsScreen/>
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
   
})

export default HomeScreen