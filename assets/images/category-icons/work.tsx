import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface CatergoryMyIcon {
  color: string;
}

const CatergoryWorkIcon = ({ color }: CatergoryMyIcon) => (
  <Svg
    width="24px"
    height="24px"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000000"
    stroke={color}
  >
    <Path
      d="M8 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H16M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7M8 7H16"
      strokeWidth={1.5}
    />
  </Svg>
);
export default CatergoryWorkIcon;