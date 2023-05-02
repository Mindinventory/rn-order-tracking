import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface OrderTrackProps<T> {
  completedComponent?: () => ReactElement;
  completedIndex: number;
  completedViewStyle?: StyleProp<ViewStyle>;
  data: ReadonlyArray<T>;
  enableRippleAnimation?: boolean;
  horizontal?: boolean;
  pendingComponent?: () => ReactElement;
  pendingViewStyle?: StyleProp<ViewStyle>;
  progressComponent?: () => ReactElement;
  progressViewStyle?: StyleProp<ViewStyle>;
  renderItem: ({ index, item }: { index: number; item: T }) => ReactElement;
  rippleDelay?: number;
  rippleDuration?: number;
  rippleRadius?: number;
  rippleStyle?: StyleProp<ViewStyle>;
  strokeCompletedColor?: string;
  strokeComponentWidth?: number;
  strokeContainerStyle?: StyleProp<ViewStyle>;
  strokeDuration?: number;
  strokeLength?: number;
  strokePendingColor?: string;
  strokeWidth?: number;
}
