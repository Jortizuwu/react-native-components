import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {CustonSwitch} from '../components/CustonSwitch';
import {HeaderTitile} from '../components/HeaderTitile';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/AppTheme';

// interface Form {

// }

export const TextInputText = () => {
  const {onChange, form, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitile title="TextInputs" />
          <TextInput
            style={styless.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styless.inputStyle}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />

          <View style={styless.switchRow}>
            <Text style={styless.switchText}>Suscribirse:</Text>
            <CustonSwitch
              isOn={isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>
          <HeaderTitile title={JSON.stringify(form, null, 3)} />

          <HeaderTitile title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={styless.inputStyle}
            placeholder="Ingrese su telefono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styless = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'red',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 25,
  },
});
