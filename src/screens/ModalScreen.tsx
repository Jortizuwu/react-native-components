import React from 'react';
import {useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitile} from '../components/HeaderTitile';
import {styles} from '../theme/AppTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitile title="Modal" />

      <Button title="Abrir moda" onPress={() => setIsVisible(!isVisible)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 25,
            }}>
            <HeaderTitile title="Modal uwu" />
            <Text>Cuerpo del modal</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginVertical: 20,
                paddingVertical: 8,
                width: '50%',
                backgroundColor: 'red',
                borderRadius: 10,
              }}
              onPress={() => setIsVisible(!isVisible)}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
