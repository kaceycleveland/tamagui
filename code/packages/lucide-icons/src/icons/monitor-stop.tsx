import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Rect x="9" y="7" width="6" height="6" stroke={color} />
      <Rect width="20" height="14" x="2" y="3" rx="2" stroke={color} />
      <Path d="M12 17v4" stroke={color} />
      <Path d="M8 21h8" stroke={color} />
    </Svg>);

};

Icon.displayName = 'MonitorStop';

export const MonitorStop = React.memo<IconProps>(themed(Icon));