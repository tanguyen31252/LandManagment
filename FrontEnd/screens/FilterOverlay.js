import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterOverlay = () => {
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');
  const [minPrice, setMinPrice] = useState('No min');
  const [maxPrice, setMaxPrice] = useState('No max');
  const [propertyType, setPropertyType] = useState('Show all');
  const [furnishedOptions, setFurnishedOptions] = useState('Any');
  const [sortOrder, setSortOrder] = useState('Anytime');

  const resetFilters = () => {
    setBedrooms('Any');
    setBathrooms('Any');
    setMinPrice('No min');
    setMaxPrice('No max');
    setPropertyType('Show all');
    setFurnishedOptions('Any');
    setSortOrder('Anytime');
  };

  const handleUpdateResults = () => {
    console.log({ bedrooms, bathrooms, minPrice, maxPrice, propertyType, furnishedOptions, sortOrder });
    // Logic to update results can be added here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter your search results</Text>

      <Text style={styles.label}>Bedrooms</Text>
      <Picker selectedValue={bedrooms} style={styles.picker} onValueChange={setBedrooms}>
        <Picker.Item label="Any" value="Any" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>

      <Text style={styles.label}>Bathrooms</Text>
      <Picker selectedValue={bathrooms} style={styles.picker} onValueChange={setBathrooms}>
        <Picker.Item label="Any" value="Any" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>

      <Text style={styles.label}>Min price</Text>
      <Picker selectedValue={minPrice} style={styles.picker} onValueChange={setMinPrice}>
        <Picker.Item label="No min" value="No min" />
        <Picker.Item label="$100" value="$100" />
        <Picker.Item label="$200" value="$200" />
        <Picker.Item label="$300" value="$300" />
      </Picker>

      <Text style={styles.label}>Max price</Text>
      <Picker selectedValue={maxPrice} style={styles.picker} onValueChange={setMaxPrice}>
        <Picker.Item label="No max" value="No max" />
        <Picker.Item label="$500" value="$500" />
        <Picker.Item label="$1000" value="$1000" />
        <Picker.Item label="$1500" value="$1500" />
      </Picker>

      <Text style={styles.label}>Property type</Text>
      <Picker selectedValue={propertyType} style={styles.picker} onValueChange={setPropertyType}>
        <Picker.Item label="Show all" value="Show all" />
        <Picker.Item label="Apartment" value="Apartment" />
        <Picker.Item label="House" value="House" />
      </Picker>

      <Text style={styles.label}>Furnished options</Text>
      <Picker selectedValue={furnishedOptions} style={styles.picker} onValueChange={setFurnishedOptions}>
        <Picker.Item label="Any" value="Any" />
        <Picker.Item label="Furnished" value="Furnished" />
        <Picker.Item label="Unfurnished" value="Unfurnished" />
      </Picker>

      <Text style={styles.label}>Sort order</Text>
      <Picker selectedValue={sortOrder} style={styles.picker} onValueChange={setSortOrder}>
        <Picker.Item label="Anytime" value="Anytime" />
        <Picker.Item label="Last 24 hours" value="Last 24 hours" />
        <Picker.Item label="Last 3 days" value="Last 3 days" />
        <Picker.Item label="Last 7 days" value="Last 7 days" />
        <Picker.Item label="Last 30 days" value="Last 30 days" />
      </Picker>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
          <Text style={styles.resetButtonText}>Reset filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateResults}>
          <Text style={styles.updateButtonText}>Update results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2E1D3', // Màu nền tương tự ảnh
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    color: '#4A4A4A',
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D6C0A6', // Màu đường viền
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 30,
  },
  resetButton: {
    backgroundColor: '#FFBF00',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#00A5E0',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default FilterOverlay;