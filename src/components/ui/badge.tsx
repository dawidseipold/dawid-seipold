import { cn } from '@/utils/helpers/cn';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ChildrenProp, StylingProp } from '@/utils/types';

// Components
import { Slot } from '@radix-ui/react-slot';

export interface BadgeProps extends ChildrenProp, StylingProp, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const badgeVariants = cva('px-4 py-1 rounded-full font-bold capitalize w-max text-sm', {
  variants: {
    type: {
      default: 'bg-emerald-800/20 text-emerald-500',
      secondary: '',
      outline: '',
      destructive: '',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

const Badge: React.FC<BadgeProps> = ({ children, className, style, type, asChild }) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className={cn(badgeVariants({ className, type }))} style={style}>
      {children}
    </Comp>
  );
};

export default Badge;
