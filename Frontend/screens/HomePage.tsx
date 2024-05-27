import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CityPicker from '../components/CityPicker';
import auth from '@react-native-firebase/auth';
import HomePageImages from "../components/HomePageImage";
import { Colors } from '../constants/colors';

type HomePageProps = {
  navigation: NativeStackNavigationProp<any>;
};

type HomePageState = {
  selectedCity: string;
};


class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      selectedCity: "Lahore",
    };

    this.navigateToPlan = this.navigateToPlan.bind(this);
    this.navigateToCustomPlan = this.navigateToCustomPlan.bind(this);
  }

  navigateToPlan() {
    this.props.navigation.navigate('My Plans');
  }

  navigateToCustomPlan() {
    this.props.navigation.navigate('CustomsPlans');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../assets/nadeem1.jpg')}
            style={styles.smallImage}
          />
          <Text style={styles.selectedCityText}>{this.state.selectedCity}, Pakistan</Text>
          <CityPicker
            onValueChange={(value: string) => this.setState({ selectedCity: value })}
          />
        </View>
        <View>
          <Text style={{ fontSize: 25, color: Colors.darkGreen }}>
            Get Your Dairy Products
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Delivered!
          </Text>
        </View>
        <View>
          <HomePageImages />
        </View>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem1} onPress={this.navigateToPlan}>
            <Text style={styles.gridText1}>My Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem2} onPress={this.navigateToCustomPlan}>
            <Text style={styles.gridText2}>Custom Plans</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Plans</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AllPlans')}>
            <Text style={styles.buttonText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.priceText}>
            Milk: 290 per litre
          </Text>
          <Text style={styles.priceText}>
            Paneer: 600 per kg
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 1,
    backgroundColor: Colors.secondaryGreen,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 2,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  selectedCityText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  gridItem1: {
    flex: 1,
    margin: 16,
    height: 90,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  gridItem2: {
    flex: 1,
    margin: 16,
    height: 90,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  gridText1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 25,
  },
  gridText2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 15,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: 'white',
  },
  sectionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.primaryGreen,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: 'white',
    marginBottom: 60,
    padding: 10,
  },
  priceText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomePage;



// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import CityPicker from '../components/CityPicker'; // Ensure the path is correct
// import { Colors } from '../constants/colors'; // Ensure this import is correct
// import HomePageImages from "../components/HomePageImage";

// type HomePageProps = {
//   navigation: NativeStackNavigationProp<any>;
// };

// const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
//   const [selectedCity, setSelectedCity] = useState("Lahore");

//   const navigateToPlan = () => {
//     navigation.navigate('My Plans'); // Navigate to the Plan screen
//   };

//   const navigateToCustomPlan = () => {
//     navigation.navigate('CustomsPlans'); // Navigate to the Custom Plan screen
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <Image
//           source={require('../assets/nadeem1.jpg')}
//           style={styles.smallImage}
//         />
//         <Text style={styles.selectedCityText}>{selectedCity}, Pakistan</Text>
//         <CityPicker
//           onValueChange={(value) => setSelectedCity(value)}
//           style={pickerSelectStyles}
//           value={selectedCity}
//         />
//       </View>
//       <View>
//         <Text style={{ fontSize: 25, color: Colors.darkGreen }}>
//           Get Your Dairy Products
//         </Text>
//         <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
//           Delivered!
//         </Text>
//       </View>
//       <View style={styles.HomePageImages}>
//         <HomePageImages />
//       </View>
//       <View style={styles.gridContainer}>
//         <TouchableOpacity style={styles.gridItem1} onPress={navigateToPlan}>
//           <Text style={styles.gridText1}>My Plans</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem2} onPress={navigateToCustomPlan}>
//           <Text style={styles.gridText2}>Custom Plans</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionText}>Plans</Text>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllPlans')}>
//           <Text style={styles.buttonText}>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//       </View>
//       <View style={{ backgroundColor: "white", marginBottom: 60 }}>
//         <Text style={{ fontSize: 20 }}>
//           Milk: 290 per litre
//         </Text>
//         <Text style={{ fontSize: 20, marginTop: 30, marginBottom: 20 }}>
//           Paneer: 600 per kg
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     marginTop: 1,
//     backgroundColor: Colors.secondaryGreen,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginTop: 2,
//   },
//   smallImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   selectedCityText: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 20,
//     marginHorizontal: 30,
//   },
//   gridContainer: {
//     backgroundColor: '#dcdcdc',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 50,
//   },
//   gridItem1: {
//     flex: 1,
//     margin: 16,
//     height: 90,
//     borderRadius: 8,
//     elevation: 4,
//     backgroundColor: 'white',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   gridItem2: {
//     flex: 1,
//     margin: 16,
//     height: 90,
//     borderRadius: 8,
//     elevation: 4,
//     backgroundColor: 'white',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   gridText1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 60,
//     marginLeft: 25,
//   },
//   gridText2: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 60,
//     marginLeft: 15,
//   },
//   sectionContainer: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 40,
//     borderRadius: 8,
//     elevation: 4,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   sectionText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: Colors.primaryGreen,
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     marginLeft: 20,
//     marginBottom: 20,
//     marginTop: 60,
//   },
//   inputAndroid: {
//     marginLeft: 20,
//     marginBottom: 20,
//     marginTop: 30,
//   },
// };

// export default HomePage;

// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
// import CityPicker from '../components/CityPicker'; // Ensure the path is correct
// import { Colors } from '../constants/colors'; // Ensure this import is correct
// import HomePageImages from "../components/HomePageImage";
// import CustomsPlan from "../screens/CustomsPlans";

// const HomePage = ({ navigation }) => {
//   const [selectedCity, setSelectedCity] = useState("Lahore");

//   const navigateToPlan = () => {
//     navigation.navigate('My Plans'); // Navigate to the Plan screen
//   };

//   const navigateToCustomPlan = () => {
//     navigation.navigate('CustomsPlans'); // Navigate to the Custom Plan screen
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <Image
//           source={require('../assets/nadeem1.jpg')}
//           style={styles.smallImage}
//         />
//         <Text style={styles.selectedCityText}>{selectedCity}, Pakistan</Text>
//         <CityPicker
//           onValueChange={(value) => setSelectedCity(value)}
//           style={pickerSelectStyles}
//           value={selectedCity}
//         />
//       </View>
//       <View>
//         <Text style={{ fontSize: 25, color: Colors.darkGreen }}>
//           Get Your Dairy Products
//         </Text>
//         <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
//           Delivered!
//         </Text>

//       </View>
//       <View style={styles.HomePageImages}>
//         <HomePageImages />
//       </View>
//       <View style={styles.gridContainer}>
//         <TouchableOpacity style={styles.gridItem1} onPress={navigateToPlan}>
//           <Text style={styles.gridText1}>My Plans</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.gridItem2} onPress={navigateToCustomPlan}>
//           <Text style={styles.gridText2}>Custom Plans</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionText}>Plans</Text>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllPlans')}>
//           <Text style={styles.buttonText}>View All</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//       </View >
//            <View style={{backgroundColor:"white",marginBottom:60}}>
//            <Text style={{fontSize:20}}>
//              Milk:      290  per litre
//         </Text>
//         <Text style={{fontSize:20,marginTop:30,marginBottom:20}}>
//           Paneer: 600 per kg
//         </Text>
//            </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     marginTop: 1,
//     backgroundColor: Colors.secondaryGreen,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginTop: 2,
//   },
//   smallImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   selectedCityText: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 20,
//     marginHorizontal: 30,
//   },
//   gridContainer: {
//     backgroundColor: '#dcdcdc',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 50,
//   },
//   gridItem1: {
//     flex: 1,
//     margin: 16,
//     height: 90,
//     borderRadius: 8,
//     elevation: 4,
//     backgroundColor: 'white',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   gridItem2: {
//     flex: 1,
//     margin: 16,
//     height: 90,
//     borderRadius: 8,
//     elevation: 4,
//     backgroundColor: 'white',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   gridText1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 60,
//     marginLeft: 25,
//   },
//   gridText2: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 60,
//     marginLeft: 15,
//   },
//   sectionContainer: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 40,
//     borderRadius: 8,
//     elevation: 4,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   sectionText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   button: {
//     //backgroundColor: Colors.darkGreen,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: Colors.primaryGreen,
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     marginLeft: 20,
//     marginBottom: 20,
//     marginTop: 60,
//   },
//   inputAndroid: {
//     marginLeft: 20,
//     marginBottom: 20,
//     marginTop: 30,
//   },
// };

// export default HomePage;
