import { forwardRef } from 'react';

import { Props } from '../OutlineIcon.types';
import useDefaultColors from '../useDefaultColors';

const LogOut = forwardRef<SVGSVGElement, Props>(({ size = 16, color, ...rest }, ref) => {
  const { outline } = useDefaultColors();
  const iconColor = color || outline.color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.9999 16H25.3333M25.3333 16L21.3333 20M25.3333 16L21.3333 12"
        stroke={iconColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3334 8V6.66667C25.3334 5.19391 24.1395 4 22.6667 4H9.33341C7.86065 4 6.66675 5.19391 6.66675 6.66667V25.3333C6.66675 26.8061 7.86066 28 9.33341 28H22.6667C24.1395 28 25.3334 26.8061 25.3334 25.3333V24"
        stroke="#252F3F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LogOut.displayName = 'LogOut';

export default LogOut;
