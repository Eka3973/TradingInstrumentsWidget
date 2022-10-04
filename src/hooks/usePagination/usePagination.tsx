import { useState } from 'react'
import { IUsePaginationProps, IUsePaginationReturn } from './interfaces'

export const usePagination = ({
  screenItems,
  totalItems
}: IUsePaginationProps): IUsePaginationReturn => {
  const [page, setPage] = useState<number>(1)

  const pageCount = Math.ceil(totalItems / screenItems)
  const lastItemIndex = page * screenItems
  const firstItemIndex = lastItemIndex - screenItems

  const changePage = (direction: boolean) => {
    setPage((prevState) => {
      if (direction) {
        if (prevState === pageCount) {
          return prevState
        }
        return prevState + 1
      } else {
        if (prevState === 1) {
          return prevState
        }
        return prevState - 1
      }
    })
  }

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstItemIndex,
    lastItemIndex,
    page,
    setPage
  }
}
