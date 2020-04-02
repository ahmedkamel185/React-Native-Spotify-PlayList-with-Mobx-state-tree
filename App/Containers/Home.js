import React from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import PlayListRow from '../Components/PlayListRow';
import { observer, inject } from 'mobx-react';

@inject('PlayStore', 'ArtistStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress(navigation, id) {
    ArtistStore.cleanData();

    ArtistStore.fetchData(id);

    navigation.navigate('Details');
  }

  renderFooter = () => {
    return (
      <View>
        <ActivityIndicator style={{ height: 80 }} color='#C00' size='large' />
      </View>
    );
  };

  render() {
    // This will render the Home PlayList

    return (
      <View>
        <FlatList
          data={PlayStore.playLists}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => this.loadMore()}
          onEndReachedThreshold={100}
          ListFooterComponent={() =>
            PlayStore.isLoading ? null : (
              <ActivityIndicator size='large' animating />
            )
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPressOut={() =>
                this.buttonPress(this.props.navigation, item.id)
              }
            >
              <PlayListRow playlist={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  loadMore = () => {
    PlayStore.fetchData();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Home;
