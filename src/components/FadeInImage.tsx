import React from 'react';
import {useState} from 'react';
import {ViewStyle} from 'react-native';
import {ActivityIndicator, Animated, StyleProp, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ViewStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  const [isLoaded, setIsLoaded] = useState(true);

  const finishLoanding = () => {
    setIsLoaded(false);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoaded && (
        <ActivityIndicator
          style={{
            position: 'absolute',
          }}
          color="red"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoanding}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
