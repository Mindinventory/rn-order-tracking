import { View, Animated, StyleProp, ViewStyle } from 'react-native';
import React, { useCallback, useEffect, useRef } from 'react';
import { containerStyles, styles } from './style';

interface ProgressRippleViewProps {
  circleSize: number;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleDelay?: number;
  progressViewStyle?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
}

const ProgressRippleView = (props: ProgressRippleViewProps) => {
  const {
    circleSize = 25,
    rippleRadius = 20,
    rippleDuration = 600,
    rippleDelay = 400,
    progressViewStyle,
    rippleStyle,
  } = props;
  const animation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const animatePin = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: rippleDuration,
          delay: rippleDelay,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation, rippleDelay, rippleDuration]);

  useEffect(() => {
    animatePin();
  }, [animatePin]);

  const scaleStyle = {
    transform: [
      {
        scale: animation,
      },
    ],
    opacity: opacityAnimation,
  };

  return (
    <View
      style={[
        styles.container,
        containerStyles(circleSize, rippleRadius).containerHW,
        progressViewStyle,
      ]}
    >
      <Animated.View
        style={[
          styles.ring,
          containerStyles(circleSize, rippleRadius).ringHW,
          rippleStyle,
          scaleStyle,
        ]}
      />
    </View>
  );
};

export default ProgressRippleView;
