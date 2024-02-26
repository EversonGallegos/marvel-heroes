'use client';

import { Caracter } from '@/app/types/Caracter'
import Image from 'next/image'
import React, { useState } from 'react'
import PersonIcon from '../_assets/images/PersonIcon.svg';
import Chevron from '../_assets/images/chevron.svg';
import Check from '../_assets/images/check.svg';

const InputDropDown = ({ list } : Readonly<{ 
  list: Caracter [],
}>)=> {


  type defaultValueCaracter = {
    name: string
    image: string
  }

  type ImageProps = {
    src: string, 
    width: number, 
    height: number
  }
  const [ caracter, setCaracter ] = useState<Caracter | defaultValueCaracter | undefined>(
    { 
      name: 'Selecione um agente',
      image: PersonIcon
    }
  );
  const [ showDropDown, setShowDropDown ] = useState<string>('hidden');

  const handleClick = (hero: Caracter | defaultValueCaracter) => {
    setCaracter(hero);
    setShowDropDown('hidden');
  }

  const getImage = (caracter: defaultValueCaracter | Caracter | undefined): ImageProps => {
    if((caracter as Caracter).thumbnail) {
      const hero = list.find((hero) => hero.id === (caracter as Caracter).id);
      const thumbnail = `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`;
      return {
        src: thumbnail,
        width: 24,
        height: 24
      }
    }
    return {
      src: PersonIcon,
      width: 15,
      height: 15
    }
  }

  return (
    <div className={
        `relative text-base w-full shadow-xs max-w-[320px] h-full max-h-[44px] border-[1px] border-solid rounded-lg pl-[14px] pr-3 py-[10px] flex items-center
        ${showDropDown === '' ? 'after:absolute after:z-[-1] border-blue-600 after:border-[4px] after:rounded-[12px] after:border-solid after:border-gray-100 after:w-[328px] after:h-[52px] after:top-[-5px] after:left-[-5px]' : 'border-gray-300'}`
      }>
      <span className={
        `flex gap-2 w-full cursor-pointer 
        ${caracter?.name === 'Selecione um agente'
          ? 'font-normal'
          : 'font-medium'
        }`
        } onClick={() => setShowDropDown((state) => state === '' ? 'hidden' : '')}>
        <Image className='rounded-full' {...getImage(caracter)}  alt={(caracter as Caracter)?.name || ''} />
        {caracter?.name}
        <Image className={`block ml-auto ${showDropDown === '' ? 'rotate-180' : ''}`} alt={showDropDown === '' ? 'open' : 'close'} src={Chevron} />
      </span>
      <div 
        className={`${showDropDown} rounded-lg absolute bg-white left-0 top-12 w-full border-[1px] border-solid border-gray-100 shadow-dropdown`} 
      >
        {list.map((hero) => {
        const thumbnail = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
        return (
        <div 
          key={hero.id}
          onClick={() => handleClick(hero)}
          className='flex font-medium gap-2 w-full pl-[14px] pr-3 py-[10px] hover:bg-gray-50 cursor-pointer'
        >
          <Image className='rounded-full' src={thumbnail} width={24} height={24}  alt={(caracter as Caracter)?.name || ''} />
          {hero.name}
          {hero.name === caracter?.name && 
            <Image className='ml-auto' width={20} height={20} src={Check} alt='Check'/>
          }
        </div>)
        })}
      </div>
    </div>
  )
}

export default InputDropDown