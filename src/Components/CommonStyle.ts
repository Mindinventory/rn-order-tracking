import { StyleSheet } from 'react-native';

export const commonStyles = (circleView: number) =>
  StyleSheet.create({
    pendingHW: {
      height: circleView,
      width: circleView,
    },
    inProgressHW: {
      height: circleView,
      width: circleView,
    },
    completedHW: {
      height: circleView,
      width: circleView,
    },
  });
