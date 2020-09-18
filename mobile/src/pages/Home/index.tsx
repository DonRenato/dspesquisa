import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import styles from './styles';

const Home = () => {
    function handleOnPress(){
        Alert.alert('Vc clicou no botao');
    }
    return(
        <>
            <View style={styles.container} >
            <Image style={styles.gamerImage} source={require('../../assets/gamer.png')} />
            <Text style={styles.title}>Vote agora!</Text>
            <Text style={styles.subTitle}>Nos diga qual é seu jogo favorito!</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress} >
                    <Text style={styles.buttonText}>
                        Coletar Dados
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Icon name="chevron-right" color="#FFFF" size={25} />
                    </View>
                </RectButton>
            </View>
        </>
        
        

    );
}

export default Home;