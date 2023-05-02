import React from 'react';
import VerticalOrderTrackList from './Vertical/VerticalOrderTrackComponent';
import HorizontalOrderTrackList from './Horizontal/HorizontalOrderTrackComponent';
import type { OrderTrackProps } from './Interface';

const OrderTrackList = <T extends any>(props: OrderTrackProps<T>) => {
  const { horizontal = false } = props;
  return (
    <>
      {props && horizontal ? (
        <HorizontalOrderTrackList {...props} />
      ) : (
        <VerticalOrderTrackList {...props} />
      )}
    </>
  );
};

export default OrderTrackList;
