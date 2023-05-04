import { StyleSheet } from 'react-native';

const customWidth = 25;

export const colors = {
  green: 'green',
  grey: 'grey',
  lGrey: 'lightgrey',
  orange: 'orange',
  primaryRed: '#E6758F',
  transparent: 'transparent',
  white: 'white',
  whiteSmoke: '#f5f5f5',
};

export const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.whiteSmoke },
  header: {
    alignItems: 'center',
    backgroundColor: colors.primaryRed,
    height: 50,
    justifyContent: 'center',
  },
  toggleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  toggleText: { fontSize: 20, fontWeight: '500' },
  customRippleEffect: {
    backgroundColor: colors.green,
  },
  pathMargin: {
    marginHorizontal: 4,
  },
  customCompletedStyle: {
    backgroundColor: 'orange',
    borderRadius: 5,
    height: customWidth,
    width: customWidth,
  },
  horizontalItemContainer: { flex: 1, marginStart: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: colors.white },
  container: {
    flex: 1,
    marginStart: 20,
  },
  button: {
    backgroundColor: colors.lGrey,
    height: 40,
    marginHorizontal: 4,
    width: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonText: { fontSize: 30, textAlign: 'center' },
  itemContainer: {
    marginHorizontal: 20,
  },
  orderStatusText: {
    fontWeight: '600',
    letterSpacing: 1,
    marginTop: 3,
  },
  orderDateText: {
    color: 'grey',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  completedView: {
    backgroundColor: colors.transparent,
    borderColor: colors.green,
    borderRadius: 15,
    borderWidth: 6,
    height: customWidth,
    width: customWidth,
  },
  pendingView: {
    backgroundColor: colors.lGrey,
    borderRadius: 5,
    height: customWidth,
    width: customWidth,
  },
  inProgressView: {
    backgroundColor: colors.orange,
    borderColor: colors.grey,
    borderRadius: 15,
    borderWidth: 6,
    height: customWidth,
    width: customWidth,
  },
});
