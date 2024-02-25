import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logo.svg'
import Menu from './Menu'
import GroupSideBar from './GroupSideBar'

const SideBar = () => {
  return (
    <div className='w-[256px] shadow-sb h-full'>
      <GroupSideBar hasBorder={true}>
        <Image src={Logo} alt="pontua" width={104.78} height={26.28} />
      </GroupSideBar>
      <Menu />
    </div>
  )
}

export default SideBar