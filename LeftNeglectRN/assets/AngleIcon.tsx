import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const AngleIcon: React.FC = () => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <G
        clipPath="url(#clip0_5152_2915)"
        stroke="#FCFCFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M14.375 4.55a7.416 7.416 0 00-5.89.06 7.693 7.693 0 00-2.48 1.767A8.072 8.072 0 004.36 9a8.354 8.354 0 00.059 6.147c.8 1.96 2.312 3.507 4.206 4.303m0-4.45v5H3.833M17.605 7.16v.01M12.458 19.94v.01M16.138 18.37v.01M18.563 15.1v.01M19.11 11v.01" />
      </G>
      <Defs>
        <ClipPath id="clip0_5152_2915">
          <Path fill="#fff" d="M0 0H23V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AngleIcon;
