import React, { use } from 'react'
import { Caracter } from '../_types/caracter'
import { Marvel } from '../_services/marvel'
import HeroCard from '../_components/HeroCard'
import { getCaracterThumbnail } from '../_lib/functions'

const page = () => {
  const caracters: Caracter[] = use(new Marvel().getCaracters())
  return (
    <div className='grid px-[27px] py-5 gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {caracters.map((caracter) => {
      return <HeroCard 
              name={caracter.name}
              history={caracter.description}
              image={getCaracterThumbnail({thumbnail: caracter.thumbnail})}
            />
          }
        )
      }
    </div>
  )
}

export default page