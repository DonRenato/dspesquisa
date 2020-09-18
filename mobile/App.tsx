import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';
import Home from './src/pages/Home';
import Header from './src/components/Header';
import styles from './global';




export default function App() {
  let [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Home />
        <StatusBar style="light" />
      </View>
    );
  }
  
}


