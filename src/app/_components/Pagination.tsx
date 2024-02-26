import React from 'react'
import { ChangePage } from '../_types/change_page';
import ButtonPagination from './ButtonPagination';

const Pagination = ({
    dispatch,
    maxPages
  }: {
    dispatch: React.Dispatch<ChangePage>,
    maxPages: number
  }) => {

  return (
    <div className='flex'>
      <ButtonPagination onClick={dispatch} action={{ type: 'decrement', maxPages }}>
        Anterior
      </ButtonPagination>
      {
        new Array(maxPages).fill(null).map((_, index) => {
         return (
          <ButtonPagination onClick={dispatch} action={{ type: index + 1, maxPages }} key={crypto.randomUUID()}>
            {index+1}
          </ButtonPagination>)
        })
      }
      <ButtonPagination onClick={dispatch} action={{ type: 'increment', maxPages}}>
        Seguinte
      </ButtonPagination>
    </div>
  )
}

export default Pagination