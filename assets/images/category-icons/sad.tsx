import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface CatergoryMyIcon {
  color: string;
}

const CatergorySadIcon = ({ color }: CatergoryMyIcon) => (
  <Svg
    width="24px"
    height="24px"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    fill="none"
    color="#000000"
    stroke={color}
  >
    <Path
      d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z"
      fill="#000000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z"
      fill="#000000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 15.5C7.5 15.5 9 13.5 12 13.5C15 13.5 16.5 15.5 16.5 15.5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CatergorySadIcon;
