import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import SplashScreen from './src/splashScreen';
import LoginPage from './src/loginPage';
import RegistrationPage from './src/registerPage';
// import SignupPage from './src/SignupPage';
// import GlucoseDisplayPage from './src/GlucoseDisplayPage';

const Stack = createNativeStackNavigator();

// Initialize Firebase once when the app starts
// if (!auth().apps.length) {
//   auth().initializeApp({
//         apiKey: "AIzaSyCiQL3r0qy4lcpmRXbHycqoTHEhbb8UZQI",
//         authDomain: "opti-gluco-samp.firebaseapp.com",
//         projectId: "opti-gluco-samp",
//         storageBucket: "opti-gluco-samp.appspot.com",
//         messagingSenderId: "408361100399",
//         appId: "1:408361100399:web:5f5e6a9c3a84056270d99a",
//         measurementId: "G-Z5KR1J2277"
//   });
// }

const firebaseConfig = {
  apiKey: "AIzaSyCiQL3r0qy4lcpmRXbHycqoTHEhbb8UZQI",
  authDomain: "opti-gluco-samp.firebaseapp.com",
  projectId: "opti-gluco-samp",
  storageBucket: "opti-gluco-samp.appspot.com",
  messagingSenderId: "408361100399",
  appId: "1:408361100399:web:5f5e6a9c3a84056270d99a",
  measurementId: "G-Z5KR1J2277"
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegistrationPage} />
        {/* <Stack.Screen name="GlucoseDisplay" component={GlucoseDisplayPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
