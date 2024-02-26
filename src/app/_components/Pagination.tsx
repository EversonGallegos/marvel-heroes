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

  const numberButtons: number[] = []

  for(let i = 1; i <=  maxPages; i++){
    numberButtons.push(i)
  }

  return (
    <div className='flex'>
      <ButtonPagination onClick={dispatch} action={{ type: 'decrement', maxPages }}>
        Anterior
      </ButtonPagination>
      {
        numberButtons.map((number) => <ButtonPagination 
          onClick={dispatch} 
          action={{ type: number, maxPages }} 
          key={crypto.randomUUID()}
        >
          {number}
        </ButtonPagination>)
      }
      <ButtonPagination onClick={dispatch} action={{ type: 'increment', maxPages}}>
        Seguinte
      </ButtonPagination>
    </div>
  )
}

export default Pagination