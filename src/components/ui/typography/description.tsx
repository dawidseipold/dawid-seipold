import { cn } from '@/utils/helpers/cn';
import { ChildrenProp, StylingProp } from '@/utils/types';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export interface DescriptionProps
  extends ChildrenProp,
    StylingProp,
    VariantProps<typeof descriptionVariants> {
  asChild?: boolean;
}

export const descriptionVariants = cva('font-semibold text-neutral-500', {
  variants: {
    size: {
      default: 'text-base md:text-lg',
      small: 'text-sm md:text-base',
      large: 'text-lg md:text-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const Description: React.FC<DescriptionProps> = ({ children, className, style, asChild, size }) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp className={cn(descriptionVariants({ className, size }))} style={style}>
      {children}
    </Comp>
  );
};

export default Description;
