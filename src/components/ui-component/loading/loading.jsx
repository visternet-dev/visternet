import { SvgIcon } from "@mui/material";

const LoadingIcon = (props) => (
  <SvgIcon
  color="secondary"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto", 
      coloir: "red",
    }}
    width="211px"
    height="211px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx={84} cy={50} r={10} fill="currentColor">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="0.43859649122807015s"
        calcMode="spline"
        keyTimes="0;1"
        values="11;0"
        keySplines="0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="fill"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="discrete"
        keyTimes="0;0.25;0.5;0.75;1"
        values="currentColor;currentColor;currentColor;currentColor;currentColor"
        begin="0s"
      />
    </circle>
    <circle cx={16} cy={50} r={10} fill="currentColor">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;11;11;11"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
    </circle>
    <circle cx={50} cy={50} r={10} fill="currentColor">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;11;11;11"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.43859649122807015s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.43859649122807015s"
      />
    </circle>
    <circle cx={84} cy={50} r={10} fill="currentColor">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;11;11;11"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.8771929824561403s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.8771929824561403s"
      />
    </circle>
    <circle cx={16} cy={50} r={10} fill="currentColor">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;11;11;11"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.3157894736842104s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1.7543859649122806s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.3157894736842104s"
      />
    </circle>
  </SvgIcon>
);

export default LoadingIcon;
