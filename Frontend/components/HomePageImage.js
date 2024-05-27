import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function HomePageImages() {
  const images = [
    require('../assets/HomePageImages/milk2.jpg'),
    require('../assets/HomePageImages/milk1.jpg'),
    require('../assets/HomePageImages/milk3.jpg'),
  ];

  return (
    <View style={styles.sliderContainer}>
      <SliderBox 
        images={images}
        dotColor='green'
        sliderBoxHeight={260} // Adjust the height as needed
        parentWidth={300} // Adjust the width as needed
        ImageComponent={CustomImageComponent}
      />
    </View>
  );
}

const CustomImageComponent = (props) => {
  return (
    <View style={styles.imageWrapper}>
      <Image {...props} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginHorizontal: 16, // Adjust the margin from both sides as needed
    marginTop: 10, 
    width:"100%"// Adjust the top margin as needed
  },
  imageWrapper: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 200,
  },
});
