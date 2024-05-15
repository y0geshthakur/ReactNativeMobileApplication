import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function CheckAvailability() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleSubmit = () => {
    if (startTime < 0 || startTime > 24 || endTime < 0 || endTime > 24) {
      alert('Please enter start and end times between 0 and 24.');
      return;
    }

    const isAvailable = checkBookings(bookings, startTime, endTime);
    if (!isAvailable) {
      alert('This slot is not available');
    } else {
      alert('This slot is available');
    }
  };

  const checkBookings = (bookings = [], newStartTime, newEndTime) => {
    return (
      !bookings.some(
        booking =>
          (newStartTime >= booking.startTime && newStartTime < booking.endTime) ||
          (newEndTime > booking.startTime && newEndTime <= booking.endTime) ||
          (newStartTime <= booking.startTime && newEndTime >= booking.endTime)
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Check Availability</Text>
        <View style={styles.inputGroup}>
          <Text>Start Time:</Text>
          <TextInput
            style={styles.input}
            value={startTime}
            onChangeText={setStartTime}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>End Time:</Text>
          <TextInput
            style={styles.input}
            value={endTime}
            onChangeText={setEndTime}
            keyboardType="numeric"
          />
        </View>
        <Button title="Check" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  inputGroup: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CheckAvailability;