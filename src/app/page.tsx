import { Marvel } from '@/app/services/marvel';
 
export default async function Page() {
  const marvel = new Marvel()
  const caracters = await marvel.getCaracters();
  return (<></>)
}