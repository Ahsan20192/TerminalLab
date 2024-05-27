import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors'; // Import your color constants
import CustomsPlan from './CustomsPlans';

const MyPlans = ({ navigation }) => {
  // Sample data for demonstration
  const planDetails = {
    products: [
      { name: 'Milk', quantity: 3 },
      { name: 'Bread', quantity: 2 },
      { name: 'Cheese', quantity: 1 },
    ],
    duration: 30, // Number of days
    skipDays: ['2024-06-02', '2024-06-10'], // Sample skip days
    nextDeliveryDate: '2024-06-15', // Sample next delivery date
    totalPrice: 1450, // Sample total price
  };

  // Render product items
  const renderProductItems = () => {
    return planDetails.products.map((product, index) => (
      <View key={index} style={styles.productItem}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productQuantity}>{product.quantity}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
     
      </View>
      <View style={styles.planDetails}>
        <Text style={styles.sectionTitle}>Selected Products</Text>
        <View style={styles.productList}>{renderProductItems()}</View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subscription Details</Text>
          <Text style={styles.detailText}>Duration: {planDetails.duration} days</Text>
          <Text style={styles.detailText}>Skip Days: {planDetails.skipDays.join(', ')}</Text>
          <Text style={styles.detailText}>Next Delivery: {planDetails.nextDeliveryDate}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Total Price</Text>
          <Text style={styles.totalPrice}>Rs {planDetails.totalPrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  planDetails: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    marginRight: 5,
  },
  productQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryGreen,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primaryGreen,
  },
});

export default MyPlans;
