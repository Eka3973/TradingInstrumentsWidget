import { IQuotesItems } from '../../Home/interfaces'

export interface IQuotesList {
  quotesList: IQuotesItems[] | []
  firstItemIndex: number
  lastItemIndex: number
}
