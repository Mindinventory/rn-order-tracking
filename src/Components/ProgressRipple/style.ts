import { StyleSheet } from 'react-native';
import { colors } from '../Colors';

export const styles = StyleSheet.create({
  ring: {
    borderRadius: 40,
    backgroundColor: colors.rippleAnimColor,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: colors.progressBorderColor,
    borderRadius: 15,
    backgroundColor: colors.transparent,
  },
});

export const containerStyles = (circleViewSize: number, rippleRadius: number) =>
  StyleSheet.create({
    containerHW: {
      width: circleViewSize,
      height: circleViewSize,
    },
    ringHW: {
      width: circleViewSize + rippleRadius,
      height: circleViewSize + rippleRadius,
    },
  });
