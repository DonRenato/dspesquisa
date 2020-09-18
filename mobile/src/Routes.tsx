import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import CreateRecords from './pages/CreateRecords';
const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Navigator 
                    headerMode="none" screenOptions=
                    {
                        { 
                            cardStyle:{
                            backgroundColor: '#0B1F34'
                            }
                        }
                    }
            > 
                <Screen name="Home" component={Home} />
                <Screen name="CreateRecords" component={CreateRecords} />
                
            </Navigator>
        </NavigationContainer>
    );

}

export default Routes;