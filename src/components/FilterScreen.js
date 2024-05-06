import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import meals from './mealsData'; // Importa el array de comidas
import { Ionicons, MaterialIcons, Fontisto, MaterialCommunityIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import DetailScreen from './DetailScreen';


const FilterScreen = () => {
    const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleDetail, setModalVisibleDetail] = useState(false);
    const [filter, setFilter] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);


    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setModalVisible(false);
    };

    const filteredMeals = filter ? meals.filter((meal) => meal.ingredientes === filter) : meals;

    const openModal = () => {
        setModalVisible(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setModalVisible(false);
    };


    // Filtrar las comidas según el tipo seleccionado
    const comidasFiltradas = tipoSeleccionado ? meals.filter((comida) => comida.tipo === tipoSeleccionado) : meals;

    const handleCloseModal = () => {
        setModalVisibleDetail(false);
        setSelectedMeal(null);
    };

    const handleProductPress = (meal) => {
        setSelectedMeal(meal);
        setModalVisibleDetail(true);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Botón para abrir el modal */}
            <TouchableOpacity style={styles.filterButton} onPress={openModal}>
                <Text style={styles.filterButtonText}><Ionicons name="options-outline" size={30} color="white" /></Text>
            </TouchableOpacity>

            {/* Modal para seleccionar el tipo */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalFilterContainer}>
                    <View style={styles.modalView}>

                        {/* Botón para cerrar el modal */}
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Ionicons style={{}} name="close" size={40} color="white" />
                        </TouchableOpacity>

                        {/* Botones para seleccionar el tipo */}

                        <Text style={styles.filterModalText}>Tipo de comida</Text>
                        <ScrollView horizontal={true}>
                            <View style={styles.filterModalFlex}>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }} >
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => { setTipoSeleccionado('Desayuno'); setModalVisible(!modalVisible); }}>
                                        <MaterialIcons name="free-breakfast" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Desayuno</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }} >
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => { setTipoSeleccionado('Almuerzo'); setModalVisible(!modalVisible); }}>
                                        <MaterialIcons name="lunch-dining" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Almuerzo</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }} >
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => { setTipoSeleccionado('Cena'); setModalVisible(!modalVisible); }}>
                                        <MaterialIcons name="dinner-dining" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Cena</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }} >
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => { setTipoSeleccionado('Cocteles'); setModalVisible(!modalVisible); }}>
                                        <Fontisto name="cocktail" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Cócteles</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }} >
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => { setTipoSeleccionado('Dulce'); setModalVisible(!modalVisible); }}>
                                        <MaterialCommunityIcons name="cupcake" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Dulce</Text>
                                </View>

                            </View>
                        </ScrollView>

                        <Text style={styles.filterModalText}>Tipo de ingredientes</Text>
                        <ScrollView horizontal={true}>
                            <View style={styles.filterModalFlex}>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }}>
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => handleFilterChange('Pasteleria')}>
                                        <MaterialCommunityIcons name="cupcake" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Pasteleria</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }}>
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => handleFilterChange('Pan')}>
                                        <FontAwesome5 name="bread-slice" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Pan</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }}>
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => handleFilterChange('Carne')}>
                                        <FontAwesome6 name="fish-fins" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Carne</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }}>
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => handleFilterChange('Papa')}>
                                        <MaterialCommunityIcons name="pot-steam" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Papa</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 5 }}>
                                    <TouchableOpacity style={styles.filterModalButton} onPress={() => handleFilterChange('Pasta')}>
                                        <MaterialCommunityIcons name="pasta" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, width: 'auto' }}>Pasta</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <TouchableOpacity style={styles.clearFilterButton} onPress={() => { setTipoSeleccionado(null); setFilter(null); setModalVisible(!modalVisible); }}>
                            <Text style={styles.clearFilterText}><Ionicons name="trash-outline" size={30} color="white" /></Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>

            {/* Lista de comidas filtradas */}

            <FlatList
                data={tipoSeleccionado ? comidasFiltradas : filteredMeals}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                        <View style={styles.productContainer}>
                            <ImageBackground
                                style={[styles.mealItem, styles.mealImage]}
                                source={item.image}
                            >
                                <View style={styles.productOverlay}>
                                    <Text style={styles.productName}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                contentContainerStyle={{ paddingLeft: 10, display: tipoSeleccionado || filter ? 'flex' : 'none' }}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleDetail}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <DetailScreen selectedMeal={selectedMeal} modalVisibleDetail={modalVisibleDetail} handleCloseModal={handleCloseModal} />
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        marginRight: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    mealItem: {
        width: 200, // Ancho del producto
        height: 250, // Alto del producto
        borderRadius: 20,
        justifyContent: 'flex-end', // Alinea el contenido en la parte inferior
    },
    productOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    productName: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    modalFilterContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    filterButton: {
        backgroundColor: 'rgb(86, 86, 86)',
        padding: 10,
        borderRadius: 9999,
        margin: 10,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterButtonText: {
        fontWeight: 'bold',
        color: 'white',
        margin: 5
    },
    closeButton: {
        bottom: 20,
        left: 5,
        padding: 10,
        alignSelf: 'flex-start',
    },
    closeButtonText: {
        fontSize: 26,
        color: 'white',
    },
    filterModalText: {
        color: 'white', fontSize: 25, fontWeight: '600', marginBottom: 15, marginLeft: 10
    },
    filterModalButton: {
        backgroundColor: 'rgb(86, 86, 86)', width: 65, height: 65, borderRadius: 999, justifyContent: 'center', alignItems: 'center', margin: 5
    },
    filterModalFlex: {
        display: 'flex', flexDirection: 'row', margin: 10
    },
    modalView: {
        top: 70
    },
    clearFilterButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 25,
        margin: 10,
        width: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        top: 320
    },
    clearFilterText: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default FilterScreen;