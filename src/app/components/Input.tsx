import React, { ButtonHTMLAttributes } from 'react'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { 
  name: string,
  type: string,
  placeholder: string,
  icon?: {
    default: string,
    focus: string
  },
  required?: boolean,
  extraClasses?: string
}
const Input = ({ 
    name,
    type,
    placeholder,
    icon = { default: '', focus: ''},
    extraClasses = '',
    required=true,
    ...props
  } : InputProps) => {
  return (
    <input
      className={
        `py-5 pl-3.5 pr-10 flex-1 text-blue-500 font-bold 
        placeholder:font-normal border-[1px] border-solid 
        border-gray-400 outline-none focus:border-blue-500 
        rounded-[10px] bg-input bg-no-repeat
        ${icon.default} ${icon.focus} ${extraClasses}`
      }
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  )
}

export default Input