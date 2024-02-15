'use client'
 
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { forgetAction } from '@/app/lib/actions';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useFormState } from 'react-dom';
 
export default function Page() {
  const [_, dispatch] = useFormState(forgetAction, undefined);
  const [email, setEmail] = useState<string | undefined>(undefined)

  const inputEmailIcon = {
    default: 'bg-at',
    focus: 'focus:bg-at-blue'
  }
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ){
    const { value } = event.target
    setEmail(value);
  }
  return (
    <form action={dispatch}>
      <h2 className='font-bold mb-4 text-[36px] leading-[36.9px] text-blue-600'>
        Recuperar senha<span className='text-orange-500'>.</span>
      </h2>
      <p className='text-base text-gray-500 mb-1.5'>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
      </p>
      <div className='flex flex-col gap-6 mb-3'>
        <Input 
          name='email'
          type='email'
          placeholder='informe seu e-mail'
          icon={inputEmailIcon}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Button
        text='enviar link'
        extraClasses='mb-5'
        disabled={!!!email}
       />
    </form>
  )
}