import React from 'react';
import {useState} from 'react';
import {Platform} from 'react-native';
import {Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (isEnamable: boolean) => void;
}

export const CustonSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#58256D6'}}
      thumbColor={Platform.OS === 'android' ? '#58256D6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
