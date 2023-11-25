import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  type?: 'outline';
  containerStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type, containerStyles }) => {
  const baseStyles = 'py-2 px-2 rounded-xl transition-all duration-300 focus:outline-none';
  const primaryStyles = 'bg-primary-500 text-white hover:bg-primary-400';
  const outlineStyles =
    'border-2 border-red-500 text-primary-500 bg-transparent hover:bg-red-500 hover:text-white';

  const buttonStyles = `${baseStyles} ${type === 'outline' ? outlineStyles : primaryStyles} ${containerStyles}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
