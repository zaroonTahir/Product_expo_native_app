//DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Product: Smartwatch X1
      </Text>
      <Text style={styles.description}>
        The Smartwatch X1 redefines wearable technology with its sleek design and advanced features. Its vibrant touch screen offers an intuitive interface, allowing you to access notifications, messages, and apps with ease. With comprehensive health tracking capabilities, including heart rate monitoring and activity tracking, it's your personal fitness companion. Seamlessly integrated with your smartphone, the Smartwatch X1 keeps you connected on the go, making it the perfect accessory for a connected and active lifestyle.
      </Text>

      <Text style={styles.title}>
        Product: Wireless Noise-Canceling Headphones Z2
      </Text>
      <Text style={styles.description}>
        Elevate your audio experience with the Wireless Noise-Canceling Headphones Z2. Immerse yourself in pure bliss as these over-ear headphones deliver crystal-clear sound quality. The advanced noise-canceling technology blocks out ambient noise, providing an unparalleled listening experience. Perfect for travel, work, or relaxation at home, the Z2 headphones offer both comfort and style for audiophiles seeking premium audio.
      </Text>

      <Text style={styles.title}>
        Product: Smart Home Security Camera S3
      </Text>
      <Text style={styles.description}>
        Ensure the safety of your home with the Smart Home Security Camera S3. This compact camera is equipped with high-definition video recording, capturing clear footage for enhanced security. With night vision capabilities, the S3 keeps a watchful eye even in low-light conditions. The two-way audio communication allows you to interact remotely, providing an added layer of security. Monitor your home effortlessly from your smartphone, whether you're at work or enjoying a vacation, ensuring peace of mind at all times.
      </Text>

      <Text style={styles.title}>
        Product: Portable Espresso Maker E1
      </Text>
      <Text style={styles.description}>
        Indulge in the luxury of enjoying your favorite espresso anywhere with the Portable Espresso Maker E1. This compact and rechargeable device is designed for coffee enthusiasts on the go. Brew a rich and flavorful cup of espresso with ease, whether you're camping, traveling, or simply in need of a caffeine fix. The E1 is your reliable and convenient espresso companion, bringing the coffee shop experience to your fingertips wherever you are.
      </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DetailScreen;
