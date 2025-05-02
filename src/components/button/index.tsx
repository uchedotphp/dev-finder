import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onclick: () => void;
}

const Button = ({
  className,
  children,
  disabled,
  type = 'button',
  onclick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[className, disabled && 'cursor-not-allowed'].join(' ')}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
