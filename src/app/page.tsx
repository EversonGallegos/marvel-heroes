import InputDropDown from '@/components/InputDropDown';
import { Marvel } from '@/services/Marvel'
import { Caracter } from '@/types/Caracter';
 
export default async function Page() {
  const marvel = new Marvel()
  const caracters = await marvel.getCaracters();
  return <main>
    <InputDropDown list={caracters} />
  </main>
}