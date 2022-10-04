import { createContext } from 'react'
import { QuotesSearchContextType } from './types'

export const QuotesSearchContext = createContext<QuotesSearchContextType>([
  '',
  () => ''
])
