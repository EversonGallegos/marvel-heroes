import { useEffect, useMemo, useState } from "react";
import { Caracter } from "../_types/caracter";
import { Marvel } from "../_services/marvel";

export function usePagination (
  list: any[],
  maxItens: number,
  currentPage: number
): [ Caracter[], number ] {

  const [caractersToShow, setCaractersToShow] = useState<Caracter[] | []>([])
  const [maxPage,  setMaxPages] = useState<number>(1)

  useMemo(() => {
    setCaractersToShow(() => {
      if(list.length <= maxItens) return list
      const start = (currentPage - 1) * maxItens;
      const end = (maxItens * currentPage);
      console.log(start, end)
      return list.slice(start, end)
    })
    setMaxPages(Math.ceil(list.length/maxItens))
  }, [currentPage, list])
  
  return [ caractersToShow, maxPage ] 
}

export function useCaracters (): Caracter [] | [] {
  const [caracters, setCaracters] = useState<Caracter[] | []>([])

  useEffect(() => {
    const getCaracters = async () => {
      const data = await new Marvel().getCaracters()
      setCaracters(data)
    }
    getCaracters();
  }, [])

  return caracters
}