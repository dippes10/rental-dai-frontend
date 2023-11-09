import React from 'react'

interface ButtonTypes {
  title: string
  onClick: () => void
  type?: 'outline'
  containerStyles?: string
}

const Button = ({ title, onClick, type, containerStyles }: ButtonTypes) => {
  return (
    <button
      className={`${containerStyles} py-3 md:px-20 px-8 rounded-[40px] bg-primary-500 hover:bg-primary-400 transition-colors font-semiBold text-purple ${
        type === 'outline' &&
        'border-2 border-primary-500 text-primary-600 bg-transparent hover:bg-primary-500 hover:text-white'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button