import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
}

export function Logo({ className, size = 'md', variant = 'full' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
    xl: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const LogoIcon = () => (
    <svg
      viewBox="0 0 40 40"
      className={cn(sizeClasses[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern TechFlow Logo Design */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      
      {/* Main Circle */}
      <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
      
      {/* Tech Flow Symbol */}
      <path
        d="M12 16 L20 12 L28 16 L20 20 L12 16 Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M12 20 L20 16 L28 20 L20 24 L12 20 Z"
        fill="white"
        opacity="0.7"
      />
      <path
        d="M12 24 L20 20 L28 24 L20 28 L12 24 Z"
        fill="white"
        opacity="0.5"
      />
      
      {/* Flow Lines */}
      <path
        d="M16 14 L24 18"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M16 18 L24 22"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M16 22 L24 26"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  if (variant === 'text') {
    return (
      <span className={cn('font-bold text-foreground', textSizeClasses[size], className)}>
        TechFlow Solutions
      </span>
    );
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <LogoIcon />
      <span className={cn('font-bold text-foreground', textSizeClasses[size])}>
        TechFlow Solutions
      </span>
    </div>
  );
}

export default Logo;
