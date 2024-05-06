import React, { useState } from 'react'
import { View, Image, Pressable, Button, Modal, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import meals from './mealsData';
import { useFonts } from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import FilterScreen from './FilterScreen';
import DetailScreen from './DetailScreen';


const SettingsScreen = () => {

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


  // Función para abrir el modal
  const openModal = () => {
    setModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModal(false);
  };


  const handleProductPress = (meal) => {
    setSelectedMeal(meal);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedMeal(null);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedFilter(item.label)}
      style={[
        styles.filterButton, styles.flexSelectedFilter,
        selectedFilter === item.label && styles.selectedFilterButton
      ]}
    >
      <Text style={styles.filterButtonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const [fontsLoaded] = useFonts({
    'permanent': require('../../assets/fonts/PermanentMarker-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  // Organizar comidas por categoría
  const mealsByCategory = meals.reduce((acc, meal) => {
    if (!acc[meal.category]) {
      acc[meal.category] = [];
    }
    acc[meal.category].push(meal);
    return acc;
  }, {});

  // Filtrar comidas según el filtro seleccionado
  const filteredMealsByCategory = Object.entries(mealsByCategory).map(([category, meals]) => ({
    category,
    meals: selectedFilter ? meals.filter(meal => meal.filter === selectedFilter) : meals,
  }));

  // Función para renderizar cada item de la FlatList
  const renderMealItem = ({ item }) => (
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
  );

  // Función para renderizar cada sección de la FlatList
  const renderCategorySection = ({ item: { category, meals } }) => (
    <View style={styles.sectionContainer}>
      <View style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
        <Text style={{ color: 'white', fontFamily: 'permanent', fontSize: 35, fontWeight: 600, letterSpacing: 1 }}>{category}</Text>
      </View>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.filtersContainer}
      />
    </View>
  );

  // Función para manejar el cambio de filtro
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Función para manejar la eliminación de filtros
  const handleClearFilters = () => {
    setSelectedFilter(null);
  };


  const filterMealsByType = (filter) => {
    // Lógica para filtrar las comidas según el filtro
    const filteredMeals = meals.filter(meal => meal.filter === filter);
    // Actualiza el estado de las comidas filtradas
    setFilteredMeals(filteredMeals);
  };

  const closeModalFromFilterScreen = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.filterContainer}>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <TouchableOpacity style={styles.clearButton} onPress={handleClearFilters}>
              <Text style={styles.clearButtonText}><Ionicons name="trash-outline" size={25} color="white" /></Text>
            </TouchableOpacity>

          </View>

          <FlatList
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            data={['Rápido', 'Fácil', '1h o menos', 'Pocos ingredientes']} // Agregar aquí tus opciones de filtro
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleFilterChange(item)}>
                <View style={styles.filterButton}>
                  <Text style={styles.filterButtonText}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            horizontal
          />

        </View>

        <View style={{ flex: 1 }}>

        <FilterScreen filterMealsByType={filterMealsByType} closeModal={closeModalFromFilterScreen} />

          <View style={styles.container}>

            <FlatList
              data={filteredMealsByCategory}
              renderItem={renderCategorySection}
              keyExtractor={(item) => item.category}
            />

          </View>

          <DetailScreen selectedMeal={selectedMeal} modalVisible={modalVisible} handleCloseModal={handleCloseModal} />

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: 'rgb(86, 86, 86)',
    padding: 10,
    borderRadius: 9999,
    margin: 10,
    width: "auto",
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    fontWeight: 'bold',
    color: 'white',
    margin: 5
  },
  filtersContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    paddingHorizontal: 15,
  },
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
  clearButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 25,
    margin: 10,
    width: "70%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  carouselContainer: {
    paddingHorizontal: 10,
    left: 20
  },
  closeButton: {
    color: 'white'
  },
  flexSelectedFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 50,
    width: 'auto'
  },



  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
});


export default SettingsScreen