import type { IconInterface } from "@/types/navigation";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SleepIcon = ({ color }: IconInterface) => (
  <Svg width={24} height={22} viewBox="0 0 24 22" fill="none">
    <Path
      d="M11.9761 22C5.64659 22 0.5 16.8534 0.5 10.5327C0.5 6.03056 3.14833 1.92565 7.25325 0.071818C7.50042 -0.042943 7.78291 -0.0164596 8.01243 0.124785C8.24196 0.266029 8.3832 0.513207 8.3832 0.786867C8.51562 6.90451 13.6092 11.8922 19.7357 11.8922C20.6008 11.8922 21.466 11.7951 22.3134 11.5921C22.5694 11.5303 22.8519 11.6009 23.0461 11.7863C23.2403 11.9717 23.3286 12.2365 23.2845 12.5013C22.3311 18.0098 17.5817 22 11.9761 22ZM6.87365 2.07572C3.94283 3.8501 2.09783 7.05458 2.09783 10.5327C2.09783 15.9706 6.52937 20.4022 11.9761 20.4022C16.3988 20.4022 20.2124 17.5067 21.4395 13.3753C20.8745 13.4547 20.3007 13.49 19.7357 13.49C13.1679 13.49 7.64167 8.47585 6.87365 2.07572Z"
      fill={color}
    />
  </Svg>
);
export default SleepIcon;
