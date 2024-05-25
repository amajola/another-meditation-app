import type { IconInterface } from "@/types/navigation";
import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

interface CloseIconInterface extends IconInterface {
  size?: number;
}

const CloseIcon = ({ color, size = 55 }: CloseIconInterface) => (
  <Svg
    width={size}
    height={size * (55 / 55)}
    viewBox="0 0 55 55"
    fill="none"
    stroke="white"
  >
    <Path
      d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z"
      stroke={color}
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseIcon;
