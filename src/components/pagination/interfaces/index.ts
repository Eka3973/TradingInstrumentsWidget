import { GestureResponderEvent } from 'react-native'
import { Dispatch, SetStateAction } from 'react'

export interface IPaginationParams {
  page: number
  totalPages: number
  nextPage: (event: GestureResponderEvent) => void
  prevPage: (event: GestureResponderEvent) => void
  setPage: Dispatch<SetStateAction<number>>
}
export interface IPagination {
  paginationParams: IPaginationParams
}
