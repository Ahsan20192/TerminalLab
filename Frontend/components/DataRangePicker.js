import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateRangePicker = () => {
  const [days, setDays] = useState('');
  const [startDate, setStartDate] = useState('');
  const [skipDate, setSkipDate] = useState('');
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isSkipDatePickerVisible, setSkipDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date.toISOString().split('T')[0]);
    hideStartDatePicker();
  };

  const showSkipDatePicker = () => {
    setSkipDatePickerVisibility(true);
  };

  const hideSkipDatePicker = () => {
    setSkipDatePickerVisibility(false);
  };

  const handleSkipDateConfirm = (date) => {
    setSkipDate(date.toISOString().split('T')[0]);
    hideSkipDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Number of days input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Days:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number of days"
            keyboardType="numeric"
            value={days}
            onChangeText={setDays}
            placeholderTextColor="#888" // Ensure placeholder is visible
          />
        </View>

        {/* Start date input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Start Date:</Text>
          <TouchableWithoutFeedback onPress={showStartDatePicker}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Select start date"
                value={startDate}
                editable={false}
                placeholderTextColor="#888" // Ensure placeholder is visible
              />
            </View>
          </TouchableWithoutFeedback>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="date"
            onConfirm={handleStartDateConfirm}
            onCancel={hideStartDatePicker}
          />
        </View>

        {/* Skip date input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Skip Date:</Text>
          <TouchableWithoutFeedback onPress={showSkipDatePicker}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Select skip date"
                value={skipDate}
                editable={false}
                placeholderTextColor="#888" // Ensure placeholder is visible
              />
            </View>
          </TouchableWithoutFeedback>
          <DateTimePickerModal
            isVisible={isSkipDatePickerVisible}
            mode="date"
            onConfirm={handleSkipDateConfirm}
            onCancel={hideSkipDatePicker}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000', // Ensure input text is visible
  },
});

export default DateRangePicker;
