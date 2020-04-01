import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Home from "../Containers/Home";
import PlayStore from "../Models/PlayList";
import ArtistStore from "../Models/ArtistList";
import { Provider } from "mobx-react";
import initialState from "../src/config";

const playStore = (window.PlayStore = PlayStore.create(initialState));

const artistStore = (window.ArtistStore = ArtistStore.create(initialState));

it("Home Renders Correctly", () => {
  const helo = renderer.create
    <Provider PlayStore={playStore.fetchData()} ArtistStore={artistStore}>
      <Home />
    </Provider>
  );
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
