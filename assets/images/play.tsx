import * as React from "react";
import type { IconInterface } from "@/types/navigation";
import Svg, { Path } from "react-native-svg";

const PlayButton = ({ color, size = 11 }: IconInterface) => (
  <Svg width={size} height={size * (12 / 11)} viewBox="0 0 11 12" fill="none">
    <Path
      d="M10.1641 4.57353L2.50637 0.222012C1.39178 -0.409384 0 0.381284 0 1.64408V10.3528C0 11.6213 1.39178 12.4119 2.50637 11.7749L10.1641 7.42334C11.2786 6.79194 11.2786 5.21061 10.1641 4.57353Z"
      fill={color}
    />
  </Svg>
);
export default PlayButton;
