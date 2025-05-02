import { forwardRef } from 'react';

import { Props } from '../OutlineIcon.types';
import useDefaultColors from '../useDefaultColors';

const ChevronDown = forwardRef<SVGSVGElement, Props>(({ size = 16, color, ...rest }, ref) => {
  const { outline } = useDefaultColors();
  const iconColor = color || outline.color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill={iconColor}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path d="m14.76 5.84-6.193 5.933c-.207.175-.402.246-.567.246a.824.824 0 0 1-.538-.216L1.24 5.839c-.31-.294-.321-.816-.023-1.098a.774.774 0 0 1 1.099-.023L8 10.166l5.684-5.445a.774.774 0 0 1 1.099.024c.298.278.288.8-.023 1.094Z" />
    </svg>
  );
});

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
