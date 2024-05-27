import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const handleLogin = () => {
    fetch('YOUR_LOGIN_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login response:', data);
        // Handle login response, e.g., store authentication token
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };
  
  const handleSignUp = () => {
    fetch('YOUR_SIGNUP_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Signup response:', data);
        // Handle signup response, e.g., show success message
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });