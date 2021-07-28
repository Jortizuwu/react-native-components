import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitile} from '../components/HeaderTitile';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Title',
      'cuerpo de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel press'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK press')},
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View>
      <HeaderTitile title="Alert" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};
