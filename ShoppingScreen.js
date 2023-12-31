// ShoppingScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Smartwatch X1',
    description:
      'The Smartwatch X1 is a sleek and feature-packed wearable device that keeps you connected on the go. With a vibrant touch screen, health tracking capabilities, and seamless integration with your smartphone, it\'s the perfect companion for a connected lifestyle.',
  },
  {
    id: '2',
    name: 'Wireless Noise-Canceling Headphones Z2',
    description:
      'Immerse yourself in pure audio bliss with the Wireless Noise-Canceling Headphones Z2. These over-ear headphones deliver crystal-clear sound quality and block out ambient noise, providing an unparalleled listening experience. Perfect for travel, work, or enjoying your favorite music at home.',
  },
  {
    id: '3',
    name: 'Smart Home Security Camera S3',
    description:
      'Keep an eye on your home with the Smart Home Security Camera S3. This compact camera features high-definition video recording, night vision, and two-way audio communication. Easily monitor your home from your smartphone, ensuring peace of mind whether you\'re at work or on vacation.',
  },
  {
    id: '4',
    name: 'Portable Espresso Maker E1',
    description:
      'Enjoy your favorite espresso on the go with the Portable Espresso Maker E1. This compact and rechargeable device allows you to brew a rich and flavorful cup of espresso wherever you are. Whether you\'re camping, traveling, or simply in need of a caffeine fix, the E1 is your go-to espresso companion.',
  },
];

const ShoppingScreen = ({ navigation }) => {
  const renderProduct = (product) => (
    <TouchableOpacity
      key={product.id}
      style={styles.productContainer}
      onPress={() => navigation.navigate('ProductDetail', { product })}
    >
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Our Products</Text>
      {products.map(renderProduct)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '80%',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ShoppingScreen;
