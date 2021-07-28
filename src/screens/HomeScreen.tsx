import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from '../theme/AppTheme';
import {menuItems} from '../data/menuItem';
import {FlatListMenuItem} from '../components/FlatListMenuItem.';
import {HeaderTitile} from '../components/HeaderTitile';
import {IstemSeparator} from '../components/ItemSeparate';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitile title="Opciones de menu" />}
        ItemSeparatorComponent={() => <IstemSeparator />}
      />
    </View>
  );
};
