import { Marvel } from '@/app/_services/marvel';
 
export default async function Page() {
  const marvel = new Marvel()
  const caracters = await marvel.getCaracters();
  return (<></>)
}