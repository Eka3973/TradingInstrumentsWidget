import { IQuotesDetails, IQuotesItems } from './interfaces'
import { CommonConstants } from '../../constants'

export const createQuotesData = (item: IQuotesItems): IQuotesDetails[] => [
  { name: CommonConstants.symbol, value: item.symbol },
  { name: CommonConstants.description, value: item.description },
  { name: CommonConstants.digits, value: item.digits },
  { name: CommonConstants.ask, value: item.ask },
  { name: CommonConstants.bid, value: item.bid },
  { name: CommonConstants.change, value: item.change },
  { name: CommonConstants.lasttime, value: item.lasttime },
  { name: CommonConstants.change24h, value: item.change24h }
]
