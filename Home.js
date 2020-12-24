/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList,Image, ImageBackground} from 'react-native';
import {Appbar, Title, TextInput, Button, Card, Avatar} from 'react-native-paper';
import Header from './Header'
import {useState, useEffect} from 'react';

const Home= (props)=>{
    const[info,setInfo]= useState({
        Name: "loading",
        Temp: "loading",
        Humidity: "loading",
        Cloud: "loading",
        Wind: "loading",
        Icon: "loading",
        Text: "loading",
        WindDir: "loading",
        WindDeg: "loading",
        feelslike: "loading"

    })

    const image = { uri: "https://www.wallpapertip.com/wmimgs/14-142901_weather-wallpaper-for-phone.jpg" };

    useEffect(()=>{
        getWeather()
    },[])

    const getWeather= ()=>{
        let myCity;
        const{city}= props.route.params
        myCity= city

        fetch("http://api.weatherapi.com/v1/current.json?key=696b7fab2cd143ba8cd185920202212&q="+myCity)
            .then(data=> data.json())
            .then(results =>{
                setInfo({
                    Name: results.location.name,
                    Temp: results.current.temp_c,
                    Humidity: results.current.humidity,
                    Cloud: results.current.cloud,
                    Wind: results.current.wind_kph,
                    Icon: results.current.condition.icon,
                    Text: results.current.condition.text,
                    WindDir: results.current.wind_dir,
                    WindDeg: results.current.wind_degree,
                    feelslike: results.current.feelslike_c
                })
            })
    }

    if(props.route.params.city != "Delhi")
    {
        getWeather()
    }

    return(
        <View style={{flex: 1}}>
            <Header name={"Weather App"}/>
            <ImageBackground style= {styles.image} source={image}>
                <View style={{ flexDirection: "row"}}>
                    <View style={{marginHorizontal:10}}>
                        <Title style={{color: 'white', marginTop: 30, fontSize: 30}}>
                            {info.Name}
                        </Title>
                        <Card style={{alignItems: "center"}}><Title style={{fontSize:15, color: "grey",}}>{info.Text}</Title></Card>

                    </View>
                    <View style={{marginHorizontal:70}}></View>
                    <View>
                        <Image style={{width:120, height:120}} source={{uri : 'http:'+info.Icon}}/>
                    </View>

                </View>

                <View>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Temperature= {info.Temp}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Humidity= {info.Humidity}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Cloud= {info.Cloud}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Wind (kph)= {info.Wind}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Wind Direction= {info.WindDir}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Wind Degree= {info.WindDeg}
                        </Title>
                    </Card>
                    <Card style={{margin: 5, padding: 12}}>
                        <Title>
                            Feels like (C)= {info.WindDeg}
                        </Title>
                    </Card>
                </View>
            </ImageBackground>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});

export default Home
