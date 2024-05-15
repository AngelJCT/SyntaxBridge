import React from "react";

function CustomIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        opacity="0.05"
        className="custom-icon"
        {...props}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ggglitch-grad">
            <stop stopColor="#8197a8ff" stopOpacity="1" offset="45%"></stop>
            <stop stopColor="#eceff2ff" stopOpacity="1" offset="100%"></stop>
          </linearGradient>
          <clipPath id="SvgjsClipPath1462">
            <rect width="61.53846153846154" height="800" x="0" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="123.07692307692308" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="246.15384615384616" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="369.2307692307692" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="492.3076923076923" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="615.3846153846154" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="738.4615384615385" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="861.5384615384615" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="984.6153846153846" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1107.6923076923076" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1230.7692307692307" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1353.8461538461538" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1476.923076923077" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1600" y="0"></rect>
          </clipPath>
          <clipPath id="SvgjsClipPath1463">
            <rect width="61.53846153846154" height="800" x="61.53846153846154" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="184.6153846153846" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="307.6923076923077" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="430.7692307692308" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="553.8461538461538" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="676.9230769230769" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="800" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="923.0769230769231" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1046.1538461538462" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1169.2307692307693" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1292.3076923076924" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1415.3846153846155" y="0"></rect>
            <rect width="61.53846153846154" height="800" x="1538.4615384615386" y="0"></rect>
          </clipPath>
        </defs>
        <g strokeWidth="45" stroke="url(#ggglitch-grad)" fill="none">
          <circle r="368.5" cx="400" cy="400" fill="none" opacity="0.31" clipPath="url(#SvgjsClipPath1462)"></circle>
          <circle r="267.5" cx="400" cy="400" fill="none" opacity="0.31" clipPath="url(#SvgjsClipPath1462)"></circle>
          <circle r="166.5" cx="400" cy="400" fill="none" opacity="0.31" clipPath="url(#SvgjsClipPath1462)"></circle>
          <circle r="65.5" cx="400" cy="400" fill="none" opacity="0.31" clipPath="url(#SvgjsClipPath1462)"></circle>
          <circle r="377.5" cx="400" cy="400" fill="none" clipPath="url(#SvgjsClipPath1463)"></circle>
          <circle r="276.5" cx="400" cy="400" fill="none" clipPath="url(#SvgjsClipPath1463)"></circle>
          <circle r="175.5" cx="400" cy="400" fill="none" clipPath="url(#SvgjsClipPath1463)"></circle>
          <circle r="74.5" cx="400" cy="400" fill="none" clipPath="url(#SvgjsClipPath1463)"></circle>
        </g>
      </svg>
    );
  }