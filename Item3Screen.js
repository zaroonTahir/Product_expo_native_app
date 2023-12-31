// Item3Screen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Item3Screen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Wireless Noise-Canceling Headphones</Text>
    <Image
        style={styles.image}
        source={require('./assets/Headphones.jpeg') } 
      resizeMode="cover"
    />
    <Text style={styles.description}>
    Immerse yourself in pure audio bliss with the Wireless Noise-Canceling Headphones Z2. These over-ear headphones deliver crystal-clear sound quality and block out ambient noise, providing an unparalleled listening experience. Perfect for travel, work, or enjoying your favorite music at home.
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

export default Item3Screen;
