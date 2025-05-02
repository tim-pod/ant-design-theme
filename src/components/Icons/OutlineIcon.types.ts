import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'svg'> & {
  size?: string | number;
  color?: string;
};

export type { Props };
