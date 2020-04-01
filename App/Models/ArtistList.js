import { types } from "mobx-state-tree";

const artist = types.model("artist", {
  id: types.string,
  name: types.string,
  type: types.string
});

const artists = types.model("artists", {
  artists: types.optional(types.array(artist), [])
});

const track = types.model("track", {
  track: artists
});

const ArtistList = types
  .model("ArtistList", {
    isLoading: false,
    token: types.string,
    offset: types.integer,
    artistLists: types.array(track),
    playlist_id: ""
  })
  .actions(self => ({
    fetchData(playlist_id) {
      self.isLoading = false;
      self.offset = self.offset + 1;

      if (playlist_id) {
        self.playlist_id = playlist_id;
      }

      try {
        const res = fetch(
          "https://api.spotify.com/v1/playlists/" +
            self.playlist_id +
            "/tracks?" +
            "limit=20&offset=" +
            self.offset,

          {
            method: "GET",
            headers: {
              //this what's exactly look in my postma
              Authorization: "Bearer " + self.token
            }
          }
        )
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.items) {
              self.pushItems(responseJson.items);
            }
          });
      } catch (error) {
        console.log("error2: ", error);
        self.error = error;
      }
    },

    pushItems(items) {
      for (const item of items) {
        self.artistLists.push(item);
      }
    },

    cleanData() {
      self.offset = 0;
      self.artistLists = [];
      self.isLoading = false;

      return true;
    }
  }));

export default ArtistList;
