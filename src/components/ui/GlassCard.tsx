import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        hover && 'glass-hover transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
