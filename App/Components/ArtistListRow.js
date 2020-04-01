import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

 export default function 

  ArtistListRow({playlist}){

   // This will return the ArtistList row component

   return (
    
    <View style={styles.container} >
        
      <View style={{ flex: 1 }} >
      
        <Text style=
        {styles.title}>{playlist.track.artists[0].name} </Text>
        <Text style=
        {styles.owner}>{playlist.track.artists[0].type} </Text>
      
      </View>
         
    </View>

  );
    
}


  const styles = StyleSheet.create(

      {
    
    container:{

      flexDirection:"row",
      padding:5,
      alignItems:"center",
      borderWidth:1.3,
      marginTop:15

    },
    
    iconContainer:{

      flex:1,
      alignItems:"center"
      
        },

    title:{
    
      fontSize:20,
      fontWeight:'700',
      flex:2,
      marginLeft:10,
      },

    owner:{
    
      fontSize:16,
      fontWeight:'300',
      flex:2,
      color:'gray',
      marginLeft:10,
    }
        
  })