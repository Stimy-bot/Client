import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      primary: "text-white bg-primary font-bold text-lg py-4 px-8 w-full hover:opacity-75",
      secondary: "text-dark-light p-2 bg-dark-hard hover:text-white hover:opacity-75 border-1 mb-2",
      danger: "bg-red-700 w-full font-semibold text-white text-lg p-4 hover:opacity-75"
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default Button