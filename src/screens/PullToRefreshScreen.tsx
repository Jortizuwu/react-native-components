import React from 'react';
import {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitile} from '../components/HeaderTitile';
import {styles} from '../theme/AppTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['white', 'red', 'orange']}
          title="loading"
          titleColor="red"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitile title="Pull to refresh" />
        {data && <HeaderTitile title={data} />}
      </View>
    </ScrollView>
  );
};
