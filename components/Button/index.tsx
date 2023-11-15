import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  type?: 'outline';
  containerStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type, containerStyles }) => {
  const baseStyles = 'py-3 px-8 rounded-full transition-all duration-300 focus:outline-none';
  const primaryStyles = 'bg-primary-500 text-white hover:bg-primary-400';
  const outlineStyles =
    'border-2 border-purple-500 text-primary-500 bg-transparent hover:bg-purple-500 hover:text-white';

  const buttonStyles = `${baseStyles} ${type === 'outline' ? outlineStyles : primaryStyles} ${containerStyles}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
