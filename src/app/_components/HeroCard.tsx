import Image from 'next/image'
import React from 'react'
import { Epilogue } from 'next/font/google'
import { normalizeHistory } from '../_lib/functions'

type Props = {
  name: string,
  history: string,
  image: string
}

const epilogue = Epilogue({ subsets: ['latin']});

const HeroCard = ({
  name,
  history,
  image
}: Props) => {
  return (
    <div className={`rounded-md bg-gray-100 flex gap-[15px] px-2.5 py-3.5 ${epilogue.className} max-h-[147px] w-full`}>
      <div className='h-full min-w-[83px] min-h-[119px]'>
        <Image className='object-fill bg-center h-[119px] w-[83px] rounded-md' src={image} alt={name} aria-label={name} width={83} height={119} />
      </div>
      <div className='flex flex-col gap-2.5'>
        <p className='font-bold font-4 leading-none'>{name}</p>
        <p className='text-[12px] font-light leading-none overflow-hidden tracking-tighter line-clamp-6 text-ellipsis'>{history}</p>
      </div>
    </div>
  )
}

export default HeroCard