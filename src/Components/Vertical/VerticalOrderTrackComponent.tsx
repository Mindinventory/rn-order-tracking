import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg, { Path } from 'react-native-svg';

import { styles } from './style';
import { commonStyles } from '../CommonStyle';
import { colors } from '../Colors';

import AnimatedStroke from '../AnimatedStroke';
import ProgressRippleView from '../ProgressRipple/ProgressRipple';
import type { OrderTrackProps } from '../Interface';

const VerticalOrderTrackList = <T extends any>(props: OrderTrackProps<T>) => {
  const {
    completedComponent = null,
    completedIndex = -1,
    completedViewStyle,
    data,
    enableRippleAnimation = true,
    pendingComponent = null,
    pendingViewStyle,
    progressComponent = null,
    progressViewStyle,
    renderItem,
    rippleDelay,
    rippleDuration,
    rippleRadius,
    rippleStyle,
    strokeCompletedColor = colors.completedColor,
    strokeComponentWidth = 25,
    strokeContainerStyle,
    strokeDuration = 1000,
    strokeLength = 50,
    strokePendingColor = colors.pendingColor,
    strokeWidth = 5,
  } = props;

  const [strokeAnimationIndex, setStrokeAnimationIndex] = useState(-1);

  const circleView = 25;
  const heightWidth =
    strokeComponentWidth > circleView ? strokeComponentWidth : circleView;
  const svgHeight = strokeLength < 50 ? 50 : strokeLength;

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
      let newStrokeAnimationIndex = strokeAnimationIndex + 1;
      timer = setTimeout(
        () => {
          setStrokeAnimationIndex(newStrokeAnimationIndex);
        },
        newStrokeAnimationIndex !== 0 ? strokeDuration : newStrokeAnimationIndex
      );
    }

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [completedIndex, data.length, strokeAnimationIndex, strokeDuration]);

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
        rippleDelay={rippleDelay}
        rippleDuration={rippleDuration}
        rippleRadius={rippleRadius}
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
    const d = `M 5 0 v ${svgHeight}`;
    return (
      <>
        <View
          style={[
            styles.verticalProgressContainer,
            {
              width: heightWidth,
            },
            strokeContainerStyle,
          ]}
        >
          <Svg width={10} height={svgHeight} style={styles.greyPath}>
            <Path d={d} stroke={strokePendingColor} strokeWidth={strokeWidth} />
          </Svg>
          {completedIndex >= index ? (
            <Svg width={10} height={svgHeight}>
              <AnimatedStroke
                d={d}
                startAnimation={strokeAnimationIndex === index}
                strokeColor={strokeCompletedColor}
                strokeDuration={strokeDuration}
                strokeLength={svgHeight}
                strokeWidth={strokeWidth}
              />
            </Svg>
          ) : (
            <View style={{ height: svgHeight }} />
          )}
        </View>
      </>
    );
  };

  const isNotLastIndex = (index: number) => {
    return index !== props.data.length - 1;
  };

  const trackView = (item: T, index: number) => {
    return (
      <View key={index}>
        <View style={styles.trackContainer}>
          {completedIndex !== -1 && completedIndex >= index
            ? strokeAnimationIndex >= index
              ? completedView()
              : pendingView()
            : completedIndex + 1 === index
            ? progressView()
            : pendingView()}

          <View
            style={[styles.renderItemContainer, { left: strokeComponentWidth }]}
          >
            {renderItem({ item: item, index: index })}
          </View>
        </View>
        {isNotLastIndex(index) ? strokeView(index) : null}
      </View>
    );
  };

  return (
    <View>
      {data.map((item, index) => {
        return trackView(item, index);
      })}
    </View>
  );
};

export default VerticalOrderTrackList;
