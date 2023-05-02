import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

interface AnimatedStrokeProps {
  d: string;
  startAnimation: boolean;
  strokeColor?: string;
  strokeDuration?: number;
  strokeLength: number;
  strokeWidth?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedStroke = ({
  d,
  startAnimation,
  strokeColor = 'black',
  strokeDuration = 1000,
  strokeLength,
  strokeWidth = 10,
}: AnimatedStrokeProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (startAnimation) {
      progress.value = withTiming(1, {
        duration: strokeDuration,
        easing: Easing.linear,
      });
    }
  }, [progress, startAnimation, strokeDuration]);

  const strokeAnimation = useAnimatedProps(() => ({
    strokeDashoffset: strokeLength - strokeLength * progress.value,
  }));

  return (
    <AnimatedPath
      animatedProps={strokeAnimation}
      d={d}
      stroke={strokeColor}
      strokeDasharray={strokeLength}
      strokeWidth={strokeWidth}
    />
  );
};

export default AnimatedStroke;
