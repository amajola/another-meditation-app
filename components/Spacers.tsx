import React from "react";
import { View } from "react-native";

interface SpacerInterface {
  height?: number;
  width?: number;
  multiply?: number;
}

const Spacer = ({ height, width, multiply = 1 }: SpacerInterface) => {
  return (
    <View
      style={{ height: height || 10 * multiply, width: width || 10 * multiply }}
    />
  );
};

export default Spacer;
