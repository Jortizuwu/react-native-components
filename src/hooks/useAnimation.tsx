import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (
    initPosition: number = 100,
    duration: number = 300,
  ) => {
    position.setValue(0);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      //   easing: Easing.bounce,
    }).start();
  };
  return {
    opacity,
    startMovingPosition,
    fadeIn,
    fadeOut,
    position,
  };
};
