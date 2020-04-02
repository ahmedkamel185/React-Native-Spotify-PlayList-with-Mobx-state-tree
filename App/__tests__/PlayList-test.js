import 'react-native';
import React from 'react';
import initialState from '../src/config';
import PlayStore from '../Models/PlayList';
import 'isomorphic-fetch';

const playStore = (window.PlayStore = PlayStore.create(initialState));

it('The PlayList Model API is successfully called', async function() {
  await playStore.fetchData();

  const res = playStore.playLists;

  console.warn(playStore.playLists);

  expect(res.length).toBeGreaterThanOrEqual(0);
});
