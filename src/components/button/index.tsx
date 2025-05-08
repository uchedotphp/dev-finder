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
  isLoading = false,
  onclick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[className, disabled && 'cursor-not-allowed'].join(' ')}
      onClick={onclick}
    >
      {!isLoading ? (
        children
      ) : (
        <div className="flex items-center justify-center">
          <div className="animate-spin h-4 w-4 border-2 border-b-transparent rounded-full mr-2"></div>
          <span>{children}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
