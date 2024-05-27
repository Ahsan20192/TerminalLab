import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductSelectedList from './screens/ProductSelectionList';
import Colors from 'react-native/Libraries/NewAppScreen';
import HomePage from './screens/HomePage';
import AllPlans from './components/AllPlans';
import MyPlans from './screens/MyPlans';
import CustomPlans from './screens/CustomsPlans';
import AddressScreen from './screens/AddressScreen';
import SignInScreen
 from './screens/SignInScreen';
 import SignUpScreen from './screens/SignUpScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <StatusBar style="inverted" initi />
      <NavigationContainer  >
        <Stack.Navigator    >
          <Stack.Screen name=' ' component={HomePage}
            options={{
              headerShown: false
            }
            } />
               
          <Stack.Screen
            name="CustomsPlans"
            component={CustomPlans}
            options={{
              headerStatusBarHeight: 0,
              headerStyle: {
                backgroundColor: "#1CB90E",
              },
            }}

          />

          <Stack.Screen
            name="ProductSelectionList" component={ProductSelectedList}
            options={
              { headerShown: false }
            }
          />
          <Stack.Screen name="Address" component={AddressScreen} 
            options={{
              title:'CustomsPlans',
              headerStatusBarHeight: 0,
              headerStyle: {
                backgroundColor: "#1CB90E",
              },
            }}
          />
             <Stack.Screen name="My Plans" component={MyPlans} 
               options={{
                title:'CustomsPlans',
                headerStatusBarHeight: 0,
                headerStyle: {
                  backgroundColor: "#1CB90E",
                },
              }}
              
                
          />
           <Stack.Screen name="AllPlans" component={AllPlans} 
               options={{
                title:'CustomsPlans',
                headerStatusBarHeight: 0,
                headerStyle: {
                  backgroundColor: "#1CB90E",
                },
              }}
              
                
          />
           

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

