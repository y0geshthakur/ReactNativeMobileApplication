import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function BookNow() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleSubmit = () => {
    if (startTime < 0 || startTime > 24 || endTime < 0 || endTime > 24) {
      alert('Please enter start and end times between 0 and 24.');
      return;
    }

    const startTimeAsNumber = Number(startTime);
    const endTimeAsNumber = Number(endTime);

    if (startTimeAsNumber >= endTimeAsNumber) {
      alert('Start time must be less than end time.');
      return;
    }

    const isDuplicate = bookings.some(
      booking =>
        (startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime)
    );

    if (isDuplicate) {
      alert('This slot is not available.');
      return;
    }

    const newBooking = { startTime, endTime };
    setBookings([...bookings, newBooking]);

    setStartTime('');
    setEndTime('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Book Now</Text>
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
        <Button title="Book" onPress={handleSubmit} />
        <View style={styles.bookingsContainer}>
          <Text style={styles.header}>Bookings</Text>
          {bookings.length === 0 ? (
            <Text>No bookings yet.</Text>
          ) : (
            <View>
              {bookings.map((booking, index) => (
                <Text key={index}>
                  Start: {booking.startTime} - End: {booking.endTime}
                </Text>
              ))}
            </View>
          )}
        </View>
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
  bookingsContainer: {
    marginTop: 20,
  },
});

export default BookNow;