import React from 'react'

const GroupSideBar = ({ children, hasBorder = false }: 
  { 
    children: React.ReactNode, 
    hasBorder?: boolean 
  }) => {
  return (
    <div className={`flex flex-col py-5 px-6 ${hasBorder ? 'border-b-[1px] border-divider' : ''}`}>
      {children}
    </div>
  )
}

export default GroupSideBar