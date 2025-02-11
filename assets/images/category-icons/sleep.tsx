import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface CatergoryMyIcon {
  color: string;
}

const CatergorySleepIcon = ({ color }: CatergoryMyIcon) => (
  <Svg
    width="24px"
    height="24px"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    fill="none"
    color="#000000"
    stroke={color}
  >
    <Circle cx={12} cy={12} r={10} strokeWidth={1.5} />
    <Path
      d="M7.63262 3.06689C8.98567 3.35733 9.99999 4.56025 9.99999 6.00007C9.99999 7.65693 8.65685 9.00007 6.99999 9.00007C5.4512 9.00007 4.17653 7.82641 4.01685 6.31997"
      strokeWidth={1.5}
    />
    <Path
      d="M22 13.0505C21.3647 12.4022 20.4793 12 19.5 12C17.567 12 16 13.567 16 15.5C16 17.2632 17.3039 18.7219 19 18.9646"
      strokeWidth={1.5}
    />
    <Path
      d="M14.5 8.51L14.51 8.49889"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CatergorySleepIcon;
