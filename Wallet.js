import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wallet = () => {
  const walletBalance = 200;

  return (
    <View style={styles.walletContainer}>
      <View style={styles.wallet}>
        <Text style={styles.header}>Wallet</Text>
        <Text style={styles.balance}>Balance: ₹{walletBalance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallet: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  balance: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Wallet;