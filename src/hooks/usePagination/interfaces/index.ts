import { GestureResponderEvent } from 'react-native'
import { Dispatch, SetStateAction } from 'react'

export interface IUsePaginationProps {
  screenItems: number
  totalItems: number
}

export interface IUsePaginationReturn {
  firstItemIndex: number
  lastItemIndex: number
  page: number
  totalPages: number
  nextPage: (event: GestureResponderEvent) => void
  prevPage: (event: GestureResponderEvent) => void
  setPage: Dispatch<SetStateAction<number>>
}
