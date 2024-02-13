'use server'
 
const signIn = async (c: string, f: FormData) => {};
 
export async function authenticate(formData: FormData | void) {
  try {
    await signIn('credentials', formData as FormData)
  } catch (error) {
    throw error
  }
}