import { cn } from '@/utils/helpers/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// Types
import type { ChildrenProp, ContainerTag, StylingProp } from '@/utils/types';
import Title, { titleVariants } from './typography/title';
import Description, { descriptionVariants } from './typography/description';

interface CardProps extends ChildrenProp, StylingProp, VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

interface CardTitleProps extends ChildrenProp, StylingProp, VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

interface CardDescriptionProps
  extends ChildrenProp,
    StylingProp,
    VariantProps<typeof descriptionVariants> {
  asChild?: boolean;
}

interface CardIconProps extends ChildrenProp, StylingProp {}

const cardVariants = cva(
  'flex flex-col gap-y-2 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl',
  {
    variants: {
      type: {
        default: '',
        link: 'cursor-pointer hover:scale-[1.02] hover:bg-white/10 transition',
      },
      padding: {
        default: 'p-6',
        small: 'p-4 ',
        large: 'p-8',
      },
      textAlign: {
        default: 'text-center',
        left: 'text-left',
        right: 'text-right',
      },
    },
    defaultVariants: {
      padding: 'default',
      textAlign: 'default',
    },
  }
);

export const Card = ({
  children,
  className,
  style,
  asChild,
  type,
  padding,
  textAlign,
}: CardProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className={cn(cardVariants({ className, padding, textAlign, type }))} style={style}>
      {children}
    </Comp>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  style,
  asChild,
  type,
  size,
}) => {
  return (
    <Title className={className} style={style} size={size} type={type} asChild={asChild}>
      {children}
    </Title>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
  style,
  asChild,
  size,
}) => {
  return (
    <Description className={className} style={style} size={size} asChild={asChild}>
      {children}
    </Description>
  );
};

export const CardIcon: React.FC<CardIconProps> = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Icon = CardIcon;
