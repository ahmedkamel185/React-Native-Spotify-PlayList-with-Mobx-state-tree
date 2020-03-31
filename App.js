import React, { Component } from 'react';
import  { createStore } from 'redux';
import Home from './App/Containers/Home';
import Details from './App/Containers/Details';
import initialState from './App/src/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayStore from './App/Models/PlayList';
import ArtistStore from './App/Models/ArtistList';
const Stack = createStackNavigator();
import {Provider} from 'mobx-react';


const playStore = window.PlayStore = PlayStore.create(initialState)

const artistStore = window.ArtistStore = ArtistStore.create(initialState)


const screens = {
    Screen1: {
      screen: Home
    },
    Screen2: {
      screen: Details
    }
  }
  
  const config = {
    headerMode: 'none',
    initialRouteName: 'Screen1'
  }

  const Stack2 = createStackNavigator();

  
export default (stack) => 

<Provider PlayStore = {playStore.fetchData()} ArtistStore = {artistStore} >

  
<NavigationContainer>
 <Stack.Navigator initialRouteName="Home">
 
 <Stack.Screen name="Home" component={Home} navigation={stack}/>
 <Stack.Screen name="Details" component={Details} />

 </Stack.Navigator>
 
</NavigationContainer>


</Provider>





