import { useEffect, useState } from 'react'
import { $api } from '../../http'
import { UrlParamsConstants } from '../../constants'
import { IQuotesItems } from '../../components/Home/interfaces'
import { IUseAxiosRequestReturn } from './interfaces'

export const useAxiosRequest = (): IUseAxiosRequestReturn => {
  const [data, setData] = useState<IQuotesItems[] | []>([])
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    Promise.all([
      $api.get(UrlParamsConstants.quotesList),
      $api.get(UrlParamsConstants.quotesTick)
    ])
      .then(
        ([
          {
            data: { quotesList }
          },
          { data: quotesTick }
        ]) => {
          const quotes = quotesList.map((quote: IQuotesItems) => {
            const quoteParams = quotesTick.find(
              (item: IQuotesItems) => quote.symbol === item.symbol
            )

            if (quoteParams) {
              return { ...quote, ...quoteParams }
            }
            return quote
          })

          setData(quotes)
        }
      )
      .catch((err) => setError(err.message))
      .then(() => setLoading(false))
  }, [])

  return {
    data,
    error,
    loading
  }
}
