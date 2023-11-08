import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return `bg-blue-500 hover:bg-blue-600 text-white`;
      case 'secondary':
        return `bg-gray-500 hover:bg-gray-600 text-white`;
      case 'outline':
        return `border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500`;
      default:
        return '';
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return 'py-1 px-2 text-sm';
      case 'medium':
        return 'py-2 px-4 text-base';
      case 'large':
        return 'py-3 px-6 text-lg';
      default:
        return '';
    }
  };

  return (
    <button
      className={`rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${getButtonStyle()} ${getButtonSize()}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
