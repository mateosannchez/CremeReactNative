import React, { useState } from 'react';

import { SafeAreaView, Modal, TouchableOpacity, ImageBackground, StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HeaderScreen = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        'permanent': require('../../assets/fonts/PermanentMarker-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>

            <ImageBackground
                source={require('../../assets/img/grapes.jpg')}
                style={styles.backgroundImage}
            >

                <TouchableOpacity style={styles.iconContainer} onPress={openModal}>
                    <Ionicons name="menu" size={40} color="white" />
                </TouchableOpacity>
                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textModal}>cre{'\n'}me</Text>
                        </View>

                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Ionicons name="close" size={40} color="white" />
                        </TouchableOpacity>

                        <View style={styles.optionsContainer}>
                            <TouchableOpacity style={styles.option}>
                                <Text style={styles.optionText}>Hogar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <Text style={styles.optionText}>Recetas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <Text style={styles.optionText}>Buscar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.apps}>
                            <TouchableOpacity style={styles.appsButton}>
                                <Text style={styles.appsText}><Ionicons name='logo-apple' size={20} color="white" /> App Store</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.appsButton}>
                                <Text style={styles.appsText}><Ionicons name='logo-google-playstore' size={20} color="white" /> Google Play</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.apps1}>
                            <TouchableOpacity style={styles.touchable}>
                                <Ionicons name='logo-instagram' size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchable}>
                                <Ionicons name='logo-tiktok' size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchable}>
                                <Ionicons name='logo-twitter' size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchable}>
                                <Ionicons name='logo-pinterest' size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>cre{'\n'}me</Text>
                </View>
            </ImageBackground>

            <LinearGradient
                colors={['rgba(0,0,0,0.9)', 'transparent']}
                style={styles.backgroundGradient}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: 900,
        resizeMode: 'cover',
        bottom: 50,
    },
    text: {
        fontFamily: 'permanent',
        fontSize: 65,
        lineHeight: 65,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: "white",
        top: 50,
        right: 25,
    },
    textModal: {
        fontFamily: 'permanent',
        fontSize: 65,
        lineHeight: 65,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: "white",
        bottom: 100,
        right: 80,
    },
    textContainer: {
        transform: [{ rotate: '-20deg' }],
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    closeButton: {
        position: 'absolute',
        top: 70,
        right: 20,
    },
    optionsContainer: {
        padding: 20,
        borderRadius: 10,
        right: 120,
        bottom: 70,
    },
    option: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    optionText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    },
    iconContainer: {
        position: 'absolute',
        top: 100,
        left: 350,
        zIndex: 1,
    },
    apps: {
        right: 85,
        bottom: 50
    },
    appsButton: {
        backgroundColor: 'rgb(86, 86, 86)', width: 210, height: 60, borderRadius: 30, margin: 10, padding: 10, justifyContent: 'center', alignItems: 'center'
    },
    appsText: {
        color: 'white', fontSize: 20, fontWeight: 800
    },
    apps1: {
        flexDirection: 'row',
        padding: 10,
        top: 50,
    },
    touchable: {
        backgroundColor: 'rgb(86, 86, 86)',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 999,
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 450,
        height: 400,
    },

});


export default HeaderScreen