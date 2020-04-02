import "react-native";
import React from 'react';
import ArtistStore from '../Models/ArtistList';
import initialState from '../src/config';
import 'isomorphic-fetch';

const artistStore = (window.ArtistStore = ArtistStore.create(initialState));

it('The playList Model API is successfully called', async function() {
  await artistStore.fetchData('37i9dQZF1DXbcPC6Vvqudd');

  const res = artistStore.artistLists;

  console.warn(res);

  expect(res.length).toBeGreaterThanOrEqual(0);
});
