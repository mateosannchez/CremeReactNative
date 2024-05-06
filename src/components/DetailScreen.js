import React, { useState } from 'react'
import { ScrollView, Modal, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, Fontisto, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


const getFilterIcon = (filter) => {
    switch (filter) {
        case 'Rápido':
            return 'fast-food-outline';
        case 'Fácil':
            return 'beer-outline';
        case '1h o menos':
            return 'time-outline';
        case 'Pocos ingredientes':
            return 'egg-outline';
        default:
            return 'information-circle-outline'; // Icono predeterminado si no hay coincidencia
    }
};

// Función para obtener el icono según el valor del tipo
const getTipoIcon = (tipo) => {
    switch (tipo) {
        case 'Desayuno':
            return 'sunny-outline';
        case 'Almuerzo':
            return 'fast-food-outline';
        case 'Cena':
            return 'restaurant-outline';
        case 'Cocteles':
            return 'beer-outline'; // Por ejemplo, el icono de cocteles podría ser un vaso de vino
        case 'Dulces':
            return 'md-ice-cream-outline'; // Por ejemplo, el icono de dulces podría ser un helado
        default:
            return 'information-circle-outline'; // Icono predeterminado si no hay coincidencia
    }
};


const DetailScreen = ({ selectedMeal, modalVisible, handleCloseModal }) => {


    return (
        <ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >

                <View style={styles.modalContainer}>
                    <View style={styles.modalBackground}>

                        <TouchableOpacity
                            style={styles.closeButtonContainer}
                            onPress={(event) => {
                                event.stopPropagation(); // Evita que el evento se propague al modal
                                handleCloseModal();
                            }}
                        >
                            <Text style={styles.closeButton}>Cerrar</Text>
                        </TouchableOpacity>

                        <ScrollView>
                            <View style={styles.modalContent}>
                                <Image
                                    source={selectedMeal?.image}
                                    style={{ width: 415, right: 20, height: 350, top: 30 }}
                                />
                                <Text style={styles.detailName}>{selectedMeal?.name}</Text>

                                <View style={{ flexDirection: 'row', top: 35 }}>
                                    <View style={styles.iconRow}>
                                        <Ionicons name={getFilterIcon(selectedMeal?.filter)} size={32} color="rgb(142, 142, 142)" />
                                    </View>
                                    <View style={styles.iconRow}>
                                        <Ionicons name={getTipoIcon(selectedMeal?.tipo)} size={32} color="rgb(142, 142, 142)" />
                                    </View>
                                </View>

                                <Text style={styles.detailDescrip}>{selectedMeal?.descripcion}</Text>

                                <View style={{ top: 70, flexDirection: 'row', margin: 5 }}>
                                    <TouchableOpacity style={styles.buttonDetail}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}><Ionicons name="bonfire" size={24} color="black" />Cocinar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buttonDetail, styles.buttonDetail1]}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Preguntar</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ top: 75, flexDirection: 'row', margin: 5 }}>
                                    <TouchableOpacity style={styles.buttonDetailRedes}>
                                        <Text><Entypo name="attachment" size={24} color="white" /></Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonDetailRedes}>
                                        <Text><Fontisto name="facebook" size={24} color="white" /></Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonDetailRedes}>
                                        <Text><Entypo name="pinterest" size={24} color="white" /></Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={{ backgroundColor: 'black', top: 170, paddingBottom: 300, width: '100%' }}>
                                    <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', marginBottom: 10 }}>Ingredientes</Text>
                                    {selectedMeal?.preparacion && Array.isArray(selectedMeal?.preparacion) && selectedMeal?.preparacion.map((preparacion, index) => (
                                        <View key={index}>
                                            {index > 0 && <View style={styles.separator} />}
                                            <Text style={styles.ingredient}>{preparacion}</Text>
                                        </View>
                                    ))}
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    modalBackground: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        // backgroundColor: 'white',
        top: 60,
        padding: 20,
        borderRadius: 10,
        width: 410,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    detailName: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
        top: 40,
        letterSpacing: -1
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 40,
        //right: 20,
        zIndex: 1,
        backgroundColor: 'red',
        width: '100%',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    iconRow: {
        margin: 5,
        // backgroundColor: 'rgb(86, 86, 86)',
        width: '10%',
        height: 60,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    filterText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    detailDescrip: {
        color: 'white',
        fontSize: 25,
        letterSpacing: -.5,
        lineHeight: 25,
        fontWeight: '600',
        top: 50
    },
    buttonDetail: {
        backgroundColor: 'white', margin: 5, width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderRadius: 25
    },
    buttonDetail1: {
        backgroundColor: 'rgb(86, 86, 86)', margin: 5, width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderRadius: 25
    },
    buttonDetailRedes: {
        backgroundColor: 'rgb(86, 86, 86)', width: '21%', height: 75, margin: 5, borderRadius: 999, justifyContent: 'center', alignItems: 'center'
    },

    ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 15,
    },
    ingredient: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
    },
})

export default DetailScreen