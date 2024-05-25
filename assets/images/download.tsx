import { IconInterface } from "@/types/navigation";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface DownloadIconInterface extends IconInterface {
  size?: number;
}

const DownloadIcon = ({ color, size = 22 }: DownloadIconInterface) => (
  <Svg width={size} height={size * (55 / 55)} viewBox="0 0 21 21" fill="none">
    <Path
      d="M15.4998 7.75L10.4998 12.75L5.49976 7.75M10.4998 11.55V1.25M1.49976 13.75V17.75C1.49976 18.85 2.39976 19.75 3.49976 19.75H17.4998C18.0302 19.75 18.5389 19.5393 18.914 19.1642C19.289 18.7891 19.4998 18.2804 19.4998 17.75V13.75H1.49976Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownloadIcon;
