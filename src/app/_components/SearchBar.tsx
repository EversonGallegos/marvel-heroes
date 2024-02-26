import React from 'react'
import Busca from '../_assets/images/busca.svg';
import Image from 'next/image';
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({subsets:['latin']});

const SearchBar = () => {
  
  return (
    <div className={`w-full h-[68px] flex pl-9 py-5 items-center gap-4 border-b-[1px] border-divider ${epilogue.className}`}>
      <Image src={Busca} width={15} height={15} alt="busca" />
      <input className='text-xs py-4 outline-none font-medium text-blue-200' placeholder='Busque um agente' type="text" name="hero" />
    </div>
  )
}

export default SearchBar