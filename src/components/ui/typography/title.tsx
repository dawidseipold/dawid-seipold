'use client';

import { Icons } from '@/components/utils/icons';
import { cn } from '@/utils/helpers/cn';
import { ChildrenProp, StylingProp, TitleTag } from '@/utils/types';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';

export interface TitleProps extends ChildrenProp, StylingProp, VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

export const titleVariants = cva('font-bold', {
  variants: {
    type: {
      default: '',
      link: 'hover:underline',
    },
    size: {
      default: 'text-2xl md:text-4xl',
      small: 'text-lg md:text-2xl',
      large: 'text-4xl md:text-6xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const Title: React.FC<TitleProps> = ({ children, asChild, className, style, size, type }) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={cn(titleVariants({ className, size, type }))} style={style}>
      {children}
    </Comp>
  );
};

export default Title;
