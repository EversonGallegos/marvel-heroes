'use client'
 
import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';
import { authenticate } from '@/app/_lib/actions';
import { useFormState } from 'react-dom';
import LoginIcon from '@/app/assets/images/login.svg';
import Escudo from '@/app/assets/images/escudo.svg';
import Link from 'next/link';
import Image from 'next/image';
 
export default function Page() {
  const [_, dispatch] = useFormState(authenticate, undefined)
  const inputEmailIcon = {
    default: 'bg-at',
    focus: 'focus:bg-at-blue'
  }
  const inputPasswordIcon = {
    default: 'bg-eyes',
    focus: 'focus:bg-eyes-blue'
  }
  return (
    <form action={dispatch}>
      <h2 className='font-bold mb-4 text-[36px] leading-[36.9px] text-blue-600'>
        Bem-vindo<span className='text-orange-500'>.</span>
      </h2>
      <p className='text-base text-gray-500 mb-1.5'>
        informe as suas credenciais de acesso ao portal
      </p>
      <div className='flex flex-col gap-6 mb-3'>
        <Input 
          name='email'
          type='email'
          placeholder='informe seu e-mail'
          icon={inputEmailIcon}
        />
        <Input 
          name='password'
          type='password'
          placeholder='informe a sua senha'
          icon={inputPasswordIcon}
        />
      </div>
      <Button
        text='entrar'
        icon={LoginIcon}
        extraClasses='mb-5'
       />
       <Link href={'/forget'} className='flex gap-1 text-orange-500 text-[11px] items-center justify-end'>
        <Image src={Escudo} alt="esqueceu a senha" />
        <span>Esqueceu a senha?</span>
       </Link>
    </form>
  )
}