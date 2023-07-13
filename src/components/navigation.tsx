'use client';

import { cn } from '@/utils/helpers/cn';

// Components
import Link from 'next/link';

interface NavigationProps {
  children: React.ReactNode;
  className?: string;
}

interface NavigationElementProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Navigation = ({ children, className }: NavigationProps) => {
  return <ul className={cn('flex', className)}>{children}</ul>;
};

const Element = ({ children, className, href }: NavigationElementProps) => {
  return (
    <Link className={cn(className)} href={href}>
      <li>{children}</li>
    </Link>
  );
};

Navigation.Element = Element;

export default Navigation;
