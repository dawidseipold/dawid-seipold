import { cn } from '@/utils/helpers/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <div className={cn('container mx-auto px-4', className)} style={style}>
      {children}
    </div>
  );
};

export default Container;
