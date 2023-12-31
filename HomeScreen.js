// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const products = [
  { id: '1', name: 'Portable Espresso Maker E1', description: 'Enjoy your favorite espresso on the go with the Portable Espresso Maker E1.', image: require('./assets/Espresso_Maker.jpeg') },
  { id: '2', name: 'Smart Home Security Camera S3', description: ' Keep an eye on your home with the Smart Home Security Camera S3. ', image: require('./assets/Security_Camera.jpeg') },
  { id: '3', name: 'Wireless Noise-Canceling Headphones Z2', description: ' Immerse yourself in pure audio bliss with the Wireless Noise-Canceling Headphones Z2', image: require('./assets/Headphones.jpeg') },
  { id: '4', name: 'Smartwatch X1', description: 'The Smartwatch X1 is a sleek and feature-packed wearable device that keeps you connected on the go', image: require('./assets/Smart_watch X1.jpeg') },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '40%', 
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default HomeScreen;
