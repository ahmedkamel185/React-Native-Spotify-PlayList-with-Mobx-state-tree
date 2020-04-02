import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PlayListRow({ playlist }) {
  // This will return the PlayList row component

  return (
    <View style={styles.container}>
      <Image source={{ uri: playlist.images[0].url }} style={styles.poster} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{playlist.name} </Text>
        <Text style={styles.owner}>By {playlist.owner.display_name} </Text>
      </View>

      <View style={styles.iconContainer}>
        <Text style={{ fontSize: 38, fontWeight: '680' }}>></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderWidth: 1.3,
    marginTop: 15
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },

  poster: {
    height: 100,
    width: 70,
    resizeMode: 'contain'
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    flex: 2,
    marginLeft: 10
  },

  owner: {
    fontSize: 16,
    fontWeight: '300',
    flex: 2,
    color: 'gray',
    marginLeft: 10
  }
});
