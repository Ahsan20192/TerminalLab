import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Colors } from '../constants/colors';

const AllPlans = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const productImages = {
    milk: require('../assets/HomePageImages/milk2.jpg'),
    cheese: require('../assets/HomePageImages/cheese.jpg'),
    paneer: require('../assets/HomePageImages/paneer.jpg'),
  };

  const productPrices = {
    milk: 9000, // Price for milk
    cheese: 15000, // Price for cheese
    paneer: 20000, // Price for paneer
  };

  const productDetails = {
    milk: "Fresh milk delivered daily. Packed with essential nutrients.",
    cheese: "High-quality cheese, perfect for a variety of dishes.",
    paneer: "Fresh paneer, a great source of protein.",
  };

  const handleAddToCart = () => {
    const selectedPrice = productPrices[selectedProduct];
    const updatedTotalPrice = totalPrice + selectedPrice;
    setTotalPrice(updatedTotalPrice);
    Alert.alert("Product added to cart!", `Total Price: Rs ${updatedTotalPrice}`);
  };

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  const handleAdd = () => {
    if (selectedProduct) {
      const price = productPrices[selectedProduct];
      setTotalPrice(price);
      Alert.alert("Product is added!");
    } else {
      Alert.alert("Please select a product first!");
    }
  };

  const handleDone = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your Plan </Text>
      <View style={styles.buttonRow}>
        {Object.keys(productImages).map(product => (
          <TouchableOpacity 
            key={product} 
            style={[styles.productButton, selectedProduct === product && styles.selectedProductButton]} 
            onPress={() => {
              setSelectedProduct(product);
              setShowDetails(false);
            }}
          >
            <Text style={styles.productButtonText}>{product.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedProduct && (
        <>
          <Image source={productImages[selectedProduct]} style={styles.selectedProductImage} />
          <View style={styles.productInfoRow}>
            <Text style={styles.productPrice}> Price: Rs {productPrices[selectedProduct]}</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.detailsButton} onPress={toggleDetails}>
            <Text style={styles.detailsButtonText}>{showDetails ? "Hide Details" : "View Details"}</Text>
          </TouchableOpacity>
          {showDetails && (
            <Text style={styles.productDetails}>{productDetails[selectedProduct]}</Text>
          )}
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <Text style={styles.totalPrice}>Total Price: Rs {totalPrice}</Text>
          {/* <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  productButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
  },
  selectedProductButton: {
    backgroundColor: Colors.primaryGreen,
  },
  productButtonText: {
    color: Colors.darkGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedProductImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGreen,
  },
  addButton: {
    backgroundColor: Colors.primaryGreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButton: {
    backgroundColor: Colors.secondaryGreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 16,
    color: Colors.darkGreen,
    marginBottom: 20,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: Colors.primaryGreen,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    textAlign: 'center',
    marginTop: 10,
  },
  doneButton: {
    backgroundColor: Colors.darkGreen,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AllPlans;
