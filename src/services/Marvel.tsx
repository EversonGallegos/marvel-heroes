import { Caracter } from "@/types/Caracter";
import axios, { AxiosInstance } from "axios";
import { md5 } from "js-md5";
export class Marvel {
  instance: AxiosInstance;
  constructor () {
    const ts = new Date().getTime();
    const public_key =  process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY || '';
    const private_key =  process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY || '';
    const hash = md5(ts.toString() + private_key + public_key);
    this.instance = axios.create({
      baseURL: 'https://gateway.marvel.com',
      headers: {
        "Content-Type": 'application/json',
      },
      params: {
        apikey: public_key,
        ts,
        hash
      }
    })
  }

  async getCaracters() : Promise<Caracter[]>{
    'use server'
    const caracters = await this.instance.get('/v1/public/characters')
    .then((response) => response.data)
    .then((responseData) => responseData.data)
    .then((data) => data.results)
    .catch((e) => {
      console.error(e)
    })
    return caracters
  }
}