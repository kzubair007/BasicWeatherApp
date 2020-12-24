/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList} from 'react-native';
import {Appbar, Title, TextInput, Button, Card} from 'react-native-paper';
import Header from './Header'
import {useState} from 'react';

const Search= ({navigation})=> {
    const [city,setCity]= useState("")
    const [cities,setCities]= useState([])
    const fetchCities= (text)=>{
        setCity(text)
        fetch("http://api.weatherapi.com/v1/current.json?key=696b7fab2cd143ba8cd185920202212&q="+text)
            .then(item=> item.json())
            .then(cityData=> {
                setCities(cityData.location)
            })
    }
    const onClick= ()=>{
        navigation.navigate("Home",{city: city})
    }
    return(
        <View style={{flex:1}}>
            <Header name= "Search Screen"/>
            <TextInput
                label= "City name"
                theme={{colors: {primary: "#00aaff"} }}
                value={city}
                onChangeText={(text)=>fetchCities(text)}
            />
            <Button
                icon="content-save"
                mode="contained"
                theme={{colors: {primary: "#00aaff"} }}
                style={{margin: 7}}
                onPress={() => onClick()}>
                <Text style={{color: "white"}}>Check</Text>
            </Button>
            <FlatList
                data={cities}
                renderItem={({item})=>{
                    return(
                        <Card style={{margin: 2, padding: 12}}>
                            <Text>{item.location.name}</Text>
                        </Card>
                    )
                }}
                keyExtractor={item=> item.name}
            />
        </View>
    )
}

export default Search;
