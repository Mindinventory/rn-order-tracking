# @mindinventory/order-tracking

With order track library you can easily integrate tracking view of library with all the customization in Horizontal & Vertical direction.


![order_track_example gif](/media/order_track_example.gif) 


## Installation

Using yarn

```sh
yarn add @mindinventory/order-tracking
```

Using npm

```sh
npm i @mindinventory/order-tracking

```

## Usage

```js
import OrderTrackList from '@mindinventory/order-tracking';

// ...

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

<OrderTrackList
  data={orderData}
  renderItem={renderOrderData}
  completedIndex={count}
/>;
```

## Component props

| Prop                  | Value    | Required/Optional | Description                                                                                                   |
| --------------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| data                  | array    | _required_        | Array of your order status like: `ordered`, `delivered`, `return`, etc.                                       |
| renderItem            | function | _required_        | Works similar like flatlist renderItem, to render your order status array.                                    |
| completedIndex        | number   | _required_        | Used for updating the completed order index animation.                                                        |
| horizontal            | boolean  | _optional_        | Use for horizontal component view of Order track UI.                                                          |
| strokePendingColor    | string   | _optional_        | Use for default stroke color.                                                                                 |
| strokeCompletedColor  | string   | _optional_        | Use for order completed stroke color.                                                                         |
| strokeDuration        | number   | _optional_        | Use to specify duration of path animation in milliseconds `(default 1000 ms)`.                                |
| strokeWidth           | number   | _optional_        | Use for set width of stroke `(default 5)`.                                                                    |
| strokeLength          | number   | _optional_        | Use for set length of stroke `(default 50)`.                                                                  |
| enableRippleAnimation | boolean  | _optional_        | Use for enabling ripple effect animation in progress view `(default true)`.                                   |
| rippleRadius          | number   | _optional_        | Use for set radius of ripple effect. More the radius, more will be ripple effect outer circle `(default 20)`. |
| rippleDuration        | number   | _optional_        | Use to specify duration of ripple effect in milliseconds `(default 600 ms)`.                                  |
| rippleDelay           | number   | _optional_        | Use to specify delay between two consecutive ripple effects animation in milliseconds `(default 400 ms)`.     |
| rippleStyle           | style    | _optional_        | Use to set custom style to ripple effect                                                                      |
| completedViewStyle    | style    | _optional_        | Use to set custom style to default completed order status view                                                |
| pendingViewStyle      | style    | _optional_        | Use to set custom style to default pending order status view                                                  |
| progressViewStyle     | style    | _optional_        | Use to set custom style to default progress order status view                                                 |
| strokeContainerStyle  | style    | _optional_        | Use to set custom style to animation path container                                                           |
| strokeComponentWidth  | number   | _optional_        | Use to set width of custom component `(default 25 for vertical & 20 for Horizontal)`.                         |
| completedComponent    | function | _optional_        | Use to set custom completed order status view                                                                 |
| pendingComponent      | function | _optional_        | Use to set custom pending order status view                                                                   |
| progressComponent     | function | _optional_        | Use to set custom progress order status view                                                                  |

## Dependencies

- `react-native-svg`
- `react-native-reanimated`
- `react-native-gesture-handler`

## To run example

```sh
Goto example directory and install all packages that requires.
cd example && yarn
Pod Installation: cd example && cd ios && pod install && cd ..
To Run: yarn ios
```

## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License!

@mindinventory/order-tracking [MIT-licensed](https://github.com/Mindinventory/rn-order-tracking/blob/master/LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=@mindinventory/order-tracking" target="__blank">

<img src="./media/hire_button.png" width="203" height="43"  alt="app development">
</a>
