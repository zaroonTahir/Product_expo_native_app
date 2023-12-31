// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>Zaroon</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>zaroon@gmail.com</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Member Since:</Text>
        <Text style={styles.value}>January 1, 2022</Text>
      </View>
      <Text style={styles.sectionTitle}>Favorite Products</Text>
      <Text style={styles.favoriteProduct}>- Smartwatch X1</Text>
      <Text style={styles.favoriteProduct}>- Wireless Noise-Canceling Headphones Z2</Text>
    
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
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  favoriteProduct: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
