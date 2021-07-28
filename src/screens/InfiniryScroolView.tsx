import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitile} from '../components/HeaderTitile';

export const InfiniryScroolView = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArr: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArr[i] = numbers.length + i + 1;
    }
    setNumbers([...numbers, ...newArr]);
  };

  const renderItem = (item: number): JSX.Element => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
    // <Image
    //   source={{
    //     uri: `https://picsum.photos/id/${item}/500/400`,
    //   }}
    //   style={{
    //     width: '100%',
    //     height: 400,
    //   }}
    // />
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitile title="Infinity Scrool" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="red" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'red',
    height: 150,
  },
});
