import React from 'react';
import { Image, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles'

const Header = () => {
    const navigation = useNavigation();
    function handlerGetBack(){
        navigation.navigate('Home');
    }
    return(
        <TouchableWithoutFeedback onPress={handlerGetBack}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.textLogo1}>Big Game</Text>
                <Text style={styles.textLogo2}>Survey</Text>  
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default Header;