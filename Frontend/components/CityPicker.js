import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const cities = [
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Karachi', value: 'Karachi' },
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Peshawar', value: 'Peshawar' },
  { label: 'Quetta', value: 'Quetta' },
  // Add more cities as needed
];

const CityPicker = ({ onValueChange, style }) => {
  return (
    <RNPickerSelect
      onValueChange={onValueChange}
      items={cities}
      placeholder={{ label: 'Select a city', value: 'Multan' }}
      style={style}
    />
  );
};
export default CityPicker;
