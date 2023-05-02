import { StyleSheet } from 'react-native';
import { colors } from '../Colors';

export const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
  },
  pendingView: {
    borderRadius: 15,
    backgroundColor: colors.pendingColor,
  },
  inProgressView: {
    borderWidth: 5,
    borderColor: colors.progressBorderColor,
    borderRadius: 15,
    backgroundColor: colors.transparent,
  },
  completedView: {
    borderRadius: 15,
    backgroundColor: colors.completedColor,
  },
  verticalProgressContainer: {
    marginVertical: '1%',
    alignItems: 'center',
  },
  greyPath: {
    position: 'absolute',
  },
  renderItemContainer: {
    position: 'absolute',
    top: 0,
    paddingBottom: 30,
  },
});
