import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'; 

const RegisterScreen = () => {
    const [productId, setProductId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus , setRegistrationStatus] = useState('');
  
    const handleRegister = async () => {
      try {
        
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        console.log('User registered successfully:', userCredential.user.email);
        setRegistrationStatus('Success');

      } catch (error) {
        console.error('Error registering user:', error);
        setRegistrationStatus('Error')
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Product ID"
          onChangeText={setProductId}
          value={productId}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegister} />
        {registrationStatus === 'Success' && <Text style={styles.successMessage}>Registration Successful!</Text>}
        {registrationStatus === 'Error' && <Text style={styles.errorMessage}>Registration Failed. Please try again.</Text>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    successMessage: {
        color: 'green',
        marginTop: 10,
      },
      errorMessage: {
        color: 'red',
        marginTop: 10,
      },
  });
  
  export default RegisterScreen;