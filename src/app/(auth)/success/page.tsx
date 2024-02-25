'use client';

import Button from '@/app/_components/Button'
import { handleRedirect } from '@/app/_lib/actions';
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-[337px]'>
      <h2 className='font-bold mb-7 text-[36px] leading-[36.9px] text-blue-600'>
        Tudo certo<span className='text-orange-500'> ;)</span>
      </h2>
      <p className='text-base text-gray-500 mb-7'>
        Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
      </p>
      <Button
        text='voltar para o login'
        type='button'
        onClick={() => handleRedirect('/login')}
        extraClasses='mb-5'
       />
    </div>
  )
}

export default Page