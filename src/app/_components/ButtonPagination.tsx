import React, { useCallback } from 'react'
import { ChangePage } from "../_types/change_page";

const ButtonPagination = ({ children, onClick, action }:
  { 
    children: React.ReactNode,
    onClick: React.Dispatch<ChangePage>,
    action: ChangePage
  }) => {

  const handleClick = () => onClick(action);

  return (
  <button onClick={handleClick} className=''>
    {children}
  </button>)
}

export default ButtonPagination