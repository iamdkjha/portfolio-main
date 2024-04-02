interface IconProps {
  width?: string;
  fillColor?: string;
  strokeWidth?: string;
  strokeColor?: string;
  height?: string;
}

export function Bars({height,width,fillColor,strokeWidth,strokeColor}: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path>
        </g>
      </svg>
    </>
  );
}

export function MessageSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z"
          ></path>
          <path
            d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zM507.214 101.21 352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function LocationSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d="M16 1A11 11 0 0 0 5 12c0 5.81 9.8 18.1 10.22 18.63a1 1 0 0 0 1.56 0C17.2 30.1 27 17.81 27 12A11 11 0 0 0 16 1zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function DialerSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M5.1 2.7c-.6 0-1.2.2-1.5.5-.6.5-1.7 1.7-1.7 3.9 0 1.5.7 3.3 2 5l.1.2c2.4 3.6 5.5 6.2 8.5 7.5 2.3 1 3.9 1.4 5 1.4.4 0 .7-.1.9-.1 1.2-.3 2.8-1.2 3.1-2.2.4-1.1.4-2 .3-2.1 0 0-.3-.1-.5-.2l-.3-.2c-1.4-.7-3.1-1.5-3.5-1.6h-.3c-.1 0-.3 0-.5.3l-.2.3c-.4.6-.9 1.2-1.2 1.6-.4.4-1.1.6-1.7.3l-.2-.1c-.7-.3-2.2-.9-4.1-2.6-1.4-1.3-2.5-2.8-3-3.7-.5-.8 0-1.3.2-1.6.4-.3.6-.4.7-.6l.3-.3c.3-.3.4-.4.6-.7.1-.1 0-.3-.1-.6-.1-.2-.5-1.2-1.1-2.6l-.5-1.2c-.3-.6-.3-.6-.8-.6h-.5z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function SearchSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 461.516 461.516"
      >
        <g>
          <path
            d="M185.746 371.332a185.294 185.294 0 0 0 113.866-39.11L422.39 455c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077L332.257 299.577c62.899-80.968 48.252-197.595-32.716-260.494S101.947-9.169 39.048 71.799-9.204 269.394 71.764 332.293a185.64 185.64 0 0 0 113.982 39.039zM87.095 87.059c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002l-.002-.002c-54.484-54.087-54.805-142.101-.718-196.585l.718-.718z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function ArrowRightSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 492.004 492.004"
      >
        <g>
          <path
            d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function ScrollUp({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}px`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <circle
            cx="256"
            cy="256"
            r="236.17"
            fill="#ff5956"
            data-original="#1138f7"
            opacity="1"
          ></circle>
          <path
            d="M256 512C114.853 512 0 397.167 0 256 0 114.853 114.853 0 256 0c141.167 0 256 114.853 256 256 0 141.167-114.833 256-256 256zm0-472.341C136.705 39.659 39.659 136.705 39.659 256S136.705 472.341 256 472.341 472.341 375.275 472.341 256c0-119.295-97.046-216.341-216.341-216.341z"
            fill="#ff5956"
            data-original="#1138f7"
            opacity="1"
          ></path>
          <path
            d="M369.227 311.126c-7.734 7.694-20.226 7.694-27.96 0l-85.069-85.069-85.069 85.069c-8.309 7.119-20.841 6.147-27.96-2.161-6.365-7.416-6.365-18.382 0-25.798l99.148-99.148c7.734-7.694 20.226-7.694 27.96 0l99.148 99.148c7.635 7.793 7.555 20.285-.198 27.959z"
            fill="#ffffff"
            data-original="#ffffff"
            opacity="1"
          ></path>
        </g>
      </svg>
    </>
  );
}