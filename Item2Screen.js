//Item2Screen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Item2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Home Security Camera</Text>
      <Image
          style={styles.image}
          source={require('./assets/Security_Camera.jpeg') } 
        resizeMode="cover"
      />
      <Text style={styles.description}>
      Keep an eye on your home with the Smart Home Security Camera S3. This compact camera features high-definition video recording, night vision, and two-way audio communication. Easily monitor your home from your smartphone, ensuring peace of mind whether you're at work or on vacation.
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

export default Item2Screen;
