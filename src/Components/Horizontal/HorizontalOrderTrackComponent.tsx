import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg, { Path } from 'react-native-svg';

import { styles } from './style';
import { commonStyles } from '../CommonStyle';
import { colors } from '../Colors';

import AnimatedStroke from '../AnimatedStroke';
import ProgressRippleView from '../ProgressRipple/ProgressRipple';
import type { OrderTrackProps } from '../Interface';

const HorizontalOrderTrackList = <T extends any>(props: OrderTrackProps<T>) => {
  const {
    completedIndex = -1,
    strokeDuration = 1000,
    strokeCompletedColor = colors.completedColor,
    strokePendingColor = colors.pendingColor,
    strokeWidth = 5,
    strokeLength = 50,
    strokeComponentWidth = 20,
    data,
    enableRippleAnimation = true,
    rippleRadius,
    rippleDuration,
    rippleDelay,
    completedViewStyle,
    pendingViewStyle,
    progressViewStyle,
    strokeContainerStyle,
    rippleStyle,
    renderItem,
    completedComponent = null,
    pendingComponent = null,
    progressComponent = null,
  } = props;

  const [strokeAnimationIndex, setStrokeAnimationIndex] = useState(-1);

  useEffect(() => {
    if (strokeAnimationIndex > completedIndex) {
      setStrokeAnimationIndex(completedIndex);
    }
  }, [completedIndex, strokeAnimationIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (
      completedIndex !== -1 &&
      completedIndex <= data.length &&
      strokeAnimationIndex < completedIndex
    ) {
      let newstrokeAnimationIndex = strokeAnimationIndex + 1;
      timer = setTimeout(
        () => {
          setStrokeAnimationIndex(newstrokeAnimationIndex);
        },
        newstrokeAnimationIndex !== 0 ? strokeDuration : newstrokeAnimationIndex
      );
    }
    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [completedIndex, data.length, strokeAnimationIndex, strokeDuration]);

  const circleView = 20;
  const heightWidth =
    strokeComponentWidth > circleView ? strokeComponentWidth : circleView;

  const completedView = () => {
    return completedComponent !== null ? (
      completedComponent()
    ) : (
      <View
        style={[
          styles.completedView,
          commonStyles(heightWidth).completedHW,
          completedViewStyle,
        ]}
      />
    );
  };

  const progressView = () => {
    return progressComponent !== null ? (
      progressComponent()
    ) : enableRippleAnimation ? (
      <ProgressRippleView
        circleSize={heightWidth}
        progressViewStyle={progressViewStyle}
        rippleRadius={rippleRadius}
        rippleDuration={rippleDuration}
        rippleDelay={rippleDelay}
        rippleStyle={rippleStyle}
      />
    ) : (
      <View
        style={[
          styles.inProgressView,
          commonStyles(heightWidth).inProgressHW,
          progressViewStyle,
        ]}
      />
    );
  };

  const pendingView = () => {
    return pendingComponent !== null ? (
      pendingComponent()
    ) : (
      <View
        style={[
          styles.pendingView,
          commonStyles(heightWidth).pendingHW,
          pendingViewStyle,
        ]}
      />
    );
  };

  const strokeView = (index: number) => {
    const d = `M 0 5 h ${strokeLength}`;
    return (
      <>
        <View
          style={[
            styles.horizontalProgressContainer,
            {
              height: heightWidth,
            },
            strokeContainerStyle,
          ]}
        >
          <Svg width={strokeLength} height={10} style={styles.greyPath}>
            <Path d={d} stroke={strokePendingColor} strokeWidth={strokeWidth} />
          </Svg>
          {completedIndex >= index ? (
            <Svg width={strokeLength} height={10}>
              <AnimatedStroke
                d={d}
                strokeColor={strokeCompletedColor}
                strokeWidth={strokeWidth}
                strokeDuration={strokeDuration}
                startAnimation={strokeAnimationIndex === index}
                strokeLength={strokeLength}
              />
            </Svg>
          ) : (
            <View style={{ width: strokeLength }} />
          )}
        </View>
      </>
    );
  };

  const isNotLastIndex = (index: number) => {
    return index !== props.data.length - 1;
  };

  const trackView = (index: number) => {
    return (
      <View key={index} style={styles.trackContainer}>
        {completedIndex !== -1 && completedIndex >= index
          ? strokeAnimationIndex >= index
            ? completedView()
            : pendingView()
          : completedIndex + 1 === index
          ? progressView()
          : pendingView()}
        {isNotLastIndex(index) ? strokeView(index) : null}
      </View>
    );
  };

  const ErrorView = () => {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          For Horizontal Component data length cannot be more than 5
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {data && data.length <= 5
          ? data.map((_, index) => {
              return trackView(index);
            })
          : ErrorView()}
      </View>
      <View style={styles.renderItemContainer}>
        {data && data.length <= 5
          ? data.map((item, index) => {
              return renderItem({ item: item, index: index });
            })
          : null}
      </View>
    </>
  );
};

export default HorizontalOrderTrackList;
