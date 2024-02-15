'use server'

import { redirect } from "next/navigation";

const signIn = async (c: string, f: FormData) => {};
 
export async function authenticate(formData: FormData | void) {
  try {
    await signIn('credentials', formData as FormData)
  } catch (error) {
    throw error
  }
}

export async function handleRedirect(path: string){
  redirect(path);
}

export async function forgetAction() {
  redirect('/success')
}
