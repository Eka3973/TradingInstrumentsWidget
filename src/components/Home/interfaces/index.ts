export interface IQuotesItems {
  symbol: string
  description?: string
  digits?: number
  ask?: number
  bid?: number
  change?: number
  lasttime?: number
  change24h?: number
}

export interface IQuotesDetails {
  name: string
  value?: string | number
}
