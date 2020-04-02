import { types } from 'mobx-state-tree';

const owner = types.model('Owner', {
  display_name: types.string
});

const image = types.model('image', {
  url: types.string
});

const playlists = types.model('playlists', {
  id: types.string,
  name: types.string,
  images: types.optional(types.array(image), []),
  owner: owner
});

const PlayList = types
  .model('Book', {
    isLoading: false,
    token: types.string,
    offset: types.integer,
    playLists: types.array(playlists)
  })
  .actions(self => ({
    fetchData() {
      if (!self.setupData()) {
        return fail;
      }

      try {
        const res = fetch(
          'https://api.spotify.com/v1/browse/featured-playlists?' +
            'limit=20&offset=' +
            self.offset,

          {
            method: 'GET',
            headers: {
              //this what's exactly look in my postman
              Authorization: 'Bearer ' + self.token
            }
          }
        )
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            console.log(responseJson);

            self.pushItems(responseJson.playlists.items);

            //  return responseJson.playlists.items
          });
      } catch (error) {
        console.log('error: ', error);
        self.error = error;
      }
    },

    pushItems(items) {
      self.isLoading = false;

      for (const item of items) {
        self.playLists.push(item);
      }
    },

    setupData() {
      self.isLoading = false;
      self.offset = self.offset + 1;

      return true;
    }
  }));

export default PlayList;
