/* eslint-disable */
import React from "react";
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {TextInput,Card,List} from 'react-native-paper';
import Search from './Screens/Search'
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab= createBottomTabNavigator()

const App= ()=>{
    return(
        <>
            <StatusBar barStyle= "dark-content" backgroundColor= "#00aaff"/>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route})=>({
                        tabBarIcon: ({color})=>{
                            let iconName;
                            if(route.name== "Home")
                            {
                                iconName= "home-city-outline"
                            }
                            else if(route.name== "Search")
                            {
                                iconName= "city"
                            }
                            return <MaterialCommunityIcons name={iconName} size={25} color={color} />
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: "#00aaff",
                        inactiveTintColor: "gray"
                    }}
                >
                    <Tab.Screen name={"Home"} component={Home}
                                initialParams={{city: "Delhi"}}
                    />
                    <Tab.Screen name={"Search"} component={Search}/>
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;
