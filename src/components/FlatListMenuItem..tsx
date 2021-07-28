import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({
  menuItem: {component, icon, name},
}: Props) => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigator.navigate(component)}>
      <View style={styles.contaiener}>
        <Icon name={icon} size={20} color="red" />
        <Text style={styles.itemText}>{name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" size={20} color="red" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contaiener: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
