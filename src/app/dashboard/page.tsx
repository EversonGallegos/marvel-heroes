'use client';

import React, { useReducer } from 'react'
import HeroCard from '../_components/HeroCard'
import { getCaracterThumbnail } from '../_lib/functions'
import { useCaracters, usePagination } from '../_lib/hooks';
import { ChangePage } from '../_types/change_page';
import Pagination from '../_components/Pagination';

type State = { page: number; };

const reducer = (state: State, action: ChangePage): State => {
    switch (action.type) {
      case 'increment':
        return state.page < action.maxPages ? { page: state.page + 1 } : { page: state.page };
      case 'decrement':
        return state.page > 1 ? { page: state.page - 1 } : { page: state.page};
      default:
        return action.type <= action.maxPages && action.type >= 1 
        ? { page: action.type }
        : { page: state.page }
    }
  };
  

const Dashboard = () => {
  const caracters = useCaracters();
  const maxItens = 10;
  
  const initialState: State = { page: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [ caractersToShow, maxPages ] = usePagination(caracters, maxItens, state.page);

  return (
    <div>
      <div className='grid px-[27px] py-5 gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr'>
        {caractersToShow.map((caracter) => {
          return (
              <HeroCard 
                name={caracter.name}
                history={caracter.description}
                image={getCaracterThumbnail({thumbnail: caracter.thumbnail})}
              />
            )
          }
        )}
      </div>
      <Pagination dispatch={dispatch} maxPages={maxPages} />
    </div>
  )
}

export default Dashboard