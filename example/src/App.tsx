import OrderTrackList from '@mindinventory/order-tracking';
import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { colors, styles } from './style';

export default function Vertical() {
  const [count, setCount] = useState<number>(2);
  const [enableHorizontal, setEnableHorizontal] = useState(false);
  const customWidth = 25;

  const orderData = [
    {
      status: 'Order Confirmed',
      date: `Tue, 28th Dec '21 - 1:47 PM`,
    },
    {
      status: 'Shipped',
      date: `Thu, 30th Dec '21 - 1:30 AM`,
    },
    {
      status: 'Out For Delivery',
      date: `Thu, 30th Dec '21 - 11:31 AM`,
    },
    {
      status: 'Delivered',
      date: `Thu, 30th Dec '21 - 4:45 PM`,
    },
    {
      status: 'Return',
      date: `Thu, 31st Dec '21 - 2:23 PM`,
    },
  ];

  const horizontalOrderData = [
    {
      status: 'Order Confirmed',
      date: `Tue, 28th Dec '21 - 1:47 PM`,
    },
    {
      status: 'Shipped',
      date: `Thu, 30th Dec '21 - 1:30 AM`,
    },
    {
      status: 'Out For Delivery',
      date: `Thu, 30th Dec '21 - 11:31 AM`,
    },
    {
      status: 'Delivered',
      date: `Thu, 30th Dec '21 - 4:45 PM`,
    },
  ];

  const renderOrderData = ({
    item,
    index,
  }: {
    item: { status: string; date: string };
    index: number;
  }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.orderStatusText}>{item.status}</Text>
        <Text style={styles.orderDateText}>{item.date}</Text>
      </View>
    );
  };

  const renderHorizontalOrderData = ({
    item,
    index,
  }: {
    item: { status: string; date: string };
    index: number;
  }) => {
    return (
      <View key={index} style={styles.horizontalItemContainer}>
        <Text style={styles.orderStatusText}>{item.status}</Text>
        <Text style={styles.orderDateText}>{item.date}</Text>
      </View>
    );
  };

  const completedComponent = () => {
    return <View style={styles.completedView} />;
  };

  const pendingComponent = () => {
    return <View style={styles.pendingView} />;
  };

  const progressComponent = () => {
    return <View style={styles.inProgressView} />;
  };

  const onCounterIncrement = () => {
    if (count < orderData.length) {
      setCount(count + 1);
    }
  };

  const onCounterDecrement = () => {
    if (count > -1) {
      setCount(count - 1);
    }
  };

  const toggleSwitch = () => {
    setEnableHorizontal(!enableHorizontal);
  };
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Order Track Component</Text>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            Toggle to {!enableHorizontal ? 'Horizontal' : 'Vertical'}
          </Text>
          <Switch
            trackColor={{ false: colors.lGrey, true: colors.green }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.grey}
            onValueChange={toggleSwitch}
            value={enableHorizontal}
          />
        </View>
        {!enableHorizontal ? (
          <View style={styles.container}>
            <OrderTrackList
              data={orderData}
              renderItem={renderOrderData}
              completedIndex={count}
              strokeCompletedColor={colors.green}
              strokePendingColor={colors.lGrey}
              strokeDuration={2000}
              strokeLength={65}
              strokeComponentWidth={customWidth}
              completedComponent={completedComponent}
              pendingComponent={pendingComponent}
              progressComponent={progressComponent}
            />
          </View>
        ) : (
          <OrderTrackList
            data={horizontalOrderData}
            renderItem={renderHorizontalOrderData}
            completedIndex={count}
            horizontal
            strokeCompletedColor={colors.green}
            strokePendingColor={colors.lGrey}
            strokeDuration={2000}
            strokeLength={85}
            enableRippleAnimation={true}
            rippleRadius={30}
            rippleDuration={1000}
            rippleDelay={500}
            rippleStyle={styles.customRippleEffect}
            strokeContainerStyle={styles.pathMargin}
            completedViewStyle={styles.customCompletedStyle}
          />
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onCounterDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onCounterIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
