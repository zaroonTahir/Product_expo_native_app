//Item1Screen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portable Espresso Maker</Text>
      <Image
          style={styles.image}
          source={require('./assets/Espresso_Maker.jpeg')} 
        resizeMode="cover"
      />
  
      <Text style={styles.description}>
      Enjoy your favorite espresso on the go with the Portable Espresso Maker E1. This compact and rechargeable device allows you to brew a rich and flavorful cup of espresso wherever you are. Whether you're camping, traveling, or simply in need of a caffeine fix, the E1 is your go-to espresso companion.
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

export default Item1Screen;
