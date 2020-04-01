import React, { Component } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ArtistListRow from "../Components/ArtistListRow";
import { observer, inject } from "mobx-react";

@inject("ArtistStore")
@observer
class Details extends Component {
  renderFooter = () => {
    return (
      <View>
        <ActivityIndicator style={{ height: 80 }} color="#C00" size="large" />
      </View>
    );
  };

  render() {
    // This will render the Details ArtistLis

    return (
      <View>
        <FlatList
          data={ArtistStore.artistLists}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => this.loadMore()}
          onEndReachedThreshold={200}
          ListFooterComponent={() =>
            ArtistStore.isLoading == true ? null : (
              <ActivityIndicator size="large" animating />
            )
          }
          renderItem={({ item }) => <ArtistListRow playlist={item} />}
        />
      </View>
    );
  }

  loadMore = () => {
    ArtistStore.fetchData();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Details;
