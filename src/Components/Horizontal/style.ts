import { StyleSheet } from 'react-native';
import { colors } from '../Colors';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  renderItemContainer: {
    flexDirection: 'row',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  horizontalProgressContainer: {
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  greyPath: {
    position: 'absolute',
  },
  errorContainer: { flex: 1, alignItems: 'center', margin: 10 },
  errorText: { fontSize: 20, lineHeight: 30, letterSpacing: 1.5 },
});
