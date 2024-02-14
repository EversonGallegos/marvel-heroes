import Image from 'next/image'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  width?: "full" | "content",
  icon?: string | undefined
  extraClasses?: string
}
const Button = ({
  text,
  width="full",
  icon=undefined,
  extraClasses='',
  ...props
}: ButtonProps) => {
  return (
    <button 
      className={
        `bg-blue-700 flex gap-2 items-center justify-center rounded-[10px] 
        font-bold text-2xl leading-tight text-center text-white py-4 px-5 
        w-${width} ${extraClasses} disabled:bg-gray-350`}
      {...props}
    >
      {text}
      {icon && <Image src={icon} alt={text} />}
    </button>
  )
}

export default Button