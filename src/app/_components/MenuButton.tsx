import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  icon: string,
  title: string
  path: string
}
const MenuButton = ({ icon,  title, path }: Props) => {
  return (
    <Link href={path} className='flex gap-[14px] p-2 rounded-xl hover:bg-gray-background'>
      <Image src={icon} alt={title}/>
      <span>{title}</span>
    </Link>
  )
}

export default MenuButton