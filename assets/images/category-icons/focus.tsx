import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface CatergoryMyIcon {
  color: string;
}

const CatergoryFocusIcon = ({ color }: CatergoryMyIcon) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    color="#000000"
    strokeWidth={1.5}
    stroke={color}
  >
    <Path
      d="M3 13C6.6 5 17.4 5 21 13"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CatergoryFocusIcon;
