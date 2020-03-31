import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Containers/Home';
import PlayStore from '../Models/PlayList';
import ArtistStore from '../Models/ArtistList';
import {Provider} from 'mobx-react';



    let initialState = {

        token : "BQDEtYmeXJ2DJYpVqNgl_FwHq_WQ49evn6pCsnaN71XvwYQn1UBGYWsKl9abHTI4iaoMrlPiBx-2hxWLDzzhSNj0DLeOcjlxE82PWsFKa6Vgz4NY-wKoPlK6jkD_JR0l2QrYcMoyYCgX8fj91MNDcW15WRnz2906oppagwRA21QpYM2R",
            
        isLoading : false,
    
        offset : 0, 

    }


    const playStore = window.PlayStore = PlayStore.create(initialState)

    const artistStore = window.ArtistStore = ArtistStore.create(initialState)


    it('Home Renders Correctly', () => {

      const helo = renderer.create(

      <Provider PlayStore = {playStore.fetchData()} ArtistStore = {artistStore} >

        <Home />

      </Provider>

        );
       
    });


    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });


