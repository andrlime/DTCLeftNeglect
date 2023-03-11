import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TimeIcon: React.FC = () => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10C0 4.478 4.478 0 10 0zM8.613 4.967h1.223a.41.41 0 01.406.407v4.71h4.299c.225 0 .407.185.407.408v1.222a.408.408 0 01-.407.407H8.205V5.374c0-.224.184-.407.408-.407zM10 2.271A7.73 7.73 0 0117.73 10 7.73 7.73 0 0110 17.73 7.73 7.73 0 0110 2.27z"
        fill="#FCFCFC"
      />
    </Svg>
  );
}

export default TimeIcon;
