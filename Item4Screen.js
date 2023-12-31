//Item4Screen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Item4Screen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Smartwatch</Text>
    <Image
        style={styles.image}
        source={require('./assets/Smart_watch X1.jpeg')  } 
      resizeMode="cover"
    />
    <Text style={styles.description}>
    The Smartwatch X1 is a sleek and feature-packed wearable device that keeps you connected on the go. With a vibrant touch screen, health tracking capabilities, and seamless integration with your smartphone, it's the perfect companion for a connected lifestyle.
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 20,
  },
});

export default Item4Screen;
