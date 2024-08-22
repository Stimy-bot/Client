import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';
import cn from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  children: ReactNode;
}

export default function Input({ children, className, variant, size, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </input>
  );
}

const inputVariants = cva("rounded-lg", {
  variants: {
    variant: {
      primary: "placeholder:text-[#959ead] text-dark-hard font-semibold border mt-2",
      secondary: "text-dark-light p-2 bg-dark-hard hover:text-white border-1 mb-2",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-l px-4 py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});