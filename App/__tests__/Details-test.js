import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PlayStore from '../Models/PlayList';
import ArtistStore from '../Models/ArtistList';
import {Provider} from 'mobx-react';
import Details from '../Containers/Details';
import initialState from '../src/config';



    const playStore = window.PlayStore = PlayStore.create(initialState)

    const artistStore = window.ArtistStore = ArtistStore.create(initialState)


    it('Details Renders Correctly', () => {

      const helo = renderer.create(

      <Provider PlayStore = {playStore.fetchData()} ArtistStore = {artistStore} >

        <Details />

      </Provider>

        );
       
    });

    // Check if test works fine

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });


