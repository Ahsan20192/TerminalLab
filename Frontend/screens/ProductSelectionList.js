import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductSelectedList = ({ visible, onClose }) => {
  const [milkCount, setMilkCount] = useState(1);
  const [breadCount, setBreadCount] = useState(1);

  const products = [
    { id: 1, name: 'Milk', price: 'Rs 290/L', image: require('../assets/HomePageImages/milk3.jpg') },
    { id: 2, name: 'Bread', price: 'Rs 50/loaf', image: require('../assets/HomePageImages/bread.jpg') },
  ];

  const decrementCount = (productId) => {
    if (productId === 1) {
      setMilkCount(prevCount => Math.max(1, prevCount - 1));
    } else if (productId === 2) {
      setBreadCount(prevCount => Math.max(1, prevCount - 1));
    }
  };

  const incrementCount = (productId) => {
    if (productId === 1) {
      setMilkCount(prevCount => prevCount + 1);
    } else if (productId === 2) {
      setBreadCount(prevCount => prevCount + 1);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Product</Text>
          <TouchableOpacity style={styles.crossButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View>
          {products.map((product) => (
            <View key={product.id} style={styles.productContainer}>
              <Image source={product.image} style={styles.productImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity onPress={() => decrementCount(product.id)}>
                    <Ionicons name="remove-circle-outline" size={24} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.productCount}>
                    {product.id === 1 ? milkCount : breadCount}
                  </Text>
                  <TouchableOpacity onPress={() => incrementCount(product.id)}>
                    <Ionicons name="add-circle-outline" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.doneButton} onPress={onClose}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  crossButton: {
    padding: 5,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  doneButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center',
  },
  doneText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ProductSelectedList;
