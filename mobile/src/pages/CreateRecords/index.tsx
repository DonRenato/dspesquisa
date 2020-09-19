import React, { useEffect, useState } from 'react';
import { FontAwesome5 as Icon} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import axios from 'axios';
import { Alert, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import styles from './styles';
import ps from './pickerStyles';
import { GamePlatform, Game } from './types';
import RNPickerSelect from 'react-native-picker-select';

const placeholder = {
    label: 'Selecione o game',
    value: ''
}

const BASE_URL = 'https://ds1pesquisa.herokuapp.com';

const mapSelectGames = (games: Game[]) =>{
    return games.map(game =>({
        ...game,
        label: game.title,
        value: game.id
    }));
}

const CreateRecords = () => {
    
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [games, setGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() =>{
        axios.get(`${BASE_URL}/games`)
        .then(res => {
            const selectValue = mapSelectGames(res.data);
            setGames(selectValue)
        
        }).catch(() => Alert.alert('Erro ao listar os jogos'));
        
    }, [])

    function handleChangePlatform(selectedPlatform: GamePlatform){
        setPlatform(selectedPlatform);
        const gamesByPlatform = games.filter(game => game.platform === selectedPlatform);
        setFilteredGames(gamesByPlatform);
    }

    function handleSubmit(){
        const body = {
                        name, 
                        age, 
                        gameId: selectedGame
                    }
        axios.post(`${BASE_URL}/records`, body)
        .then(() => {
            Alert.alert("Pesquisa cadastrada com sucesso!");
            setName('');
            setAge('');
            setSelectedGame('')
            setPlatform(undefined);
        }).catch(() => Alert.alert('Erro ao cadastrar a pesquisa'))
    }           


    return(
        <>
            <Header />
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Nome"  
                    placeholderTextColor="#9E9E9E"
                    maxLength={50}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput 
                style={styles.inputText} 
                placeholder="Idade" 
                placeholderTextColor="#9E9E9E" 
                keyboardType="numeric"
                maxLength={2}
                onChangeText={text => setAge(text)}
                value={age}
                />

                <View style={styles.platformContainer}>
                <PlatformCard platform="PC" icon="laptop" onChange={handleChangePlatform} activePlatform={platform} />
                <PlatformCard platform="XBOX" icon="xbox" onChange={handleChangePlatform} activePlatform={platform} />
                <PlatformCard platform="PLAYSTATION" icon="playstation" onChange={handleChangePlatform} activePlatform={platform} />
                </View>

                <RNPickerSelect
                    style={ps}
                    Icon={() => {
                        return <Icon name='chevron-down' color="#9e9e9e" size={25}/>
                    }}
                    placeholder={placeholder}
                    value={selectedGame}
                    items={filteredGames}
                    onValueChange={value => {setSelectedGame(value)}}
                />

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>
                    </RectButton>
                </View>
            </View>
           
        </>
    );

}

export default CreateRecords;