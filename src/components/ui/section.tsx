import { cn } from '@/utils/helpers/cn';
import { VariantProps, cva } from 'class-variance-authority';

// Components
import Container from '../container';

// Types
import type { ChildrenProp, StylingProp } from '@/utils/types';
import Title, { titleVariants } from './typography/title';
import Description, { descriptionVariants } from './typography/description';
import React from 'react';

interface SectionProps extends ChildrenProp, StylingProp, VariantProps<typeof sectionVarians> {}

interface SectionTitleProps extends ChildrenProp, StylingProp, VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

interface SectionDescriptionProps
  extends ChildrenProp,
    StylingProp,
    VariantProps<typeof descriptionVariants> {
  asChild?: boolean;
}

const sectionVarians = cva('flex flex-col gap-y-8', {
  variants: {
    textAlign: {
      default: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
  },
  defaultVariants: {
    textAlign: 'default',
  },
});

export const Section = ({ children, className, textAlign, style }: SectionProps) => {
  return (
    <section className="mb-16 mt-8 md:mb-32 lg:mb-48">
      <Container className={cn(sectionVarians({ textAlign, className }))} style={style}>
        {children}
      </Container>
    </section>
  );
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
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

export const SectionDescription: React.FC<SectionDescriptionProps> = ({
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

Section.Title = SectionTitle;
Section.Description = Description;
