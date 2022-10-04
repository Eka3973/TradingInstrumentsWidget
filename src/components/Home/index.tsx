import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { useAxiosRequest } from '../../hooks/useAxiosRequest/useAxiosRequest'
import { ErrorComponent } from '../Error'
import { Loader } from '../Loader'
import { QuotesSearchContext } from '../../context/QuotesSearchContext'
import { IQuotesItems } from './interfaces'
import { Pagination } from '../pagination'
import { usePagination } from '../../hooks/usePagination/usePagination'
import { QuotesList } from '../QuotesList'

export const Home: FC = () => {
  const [context] = useContext(QuotesSearchContext)
  const [quotesList, setQuotesList] = useState<IQuotesItems[] | []>([])

  const { data, loading, error } = useAxiosRequest()
  const { firstItemIndex, lastItemIndex, ...rest } = usePagination({
    screenItems: 10,
    totalItems: quotesList.length
  })

  const getSearchData = useMemo(() => {
    return data?.filter((item: IQuotesItems) => {
      return item.symbol.toLowerCase().includes(context)
    })
  }, [data, context])

  useEffect(() => {
    setQuotesList(data)
  }, [data])

  useEffect(() => {
    setQuotesList(getSearchData)
  }, [getSearchData])

  if (error) {
    return <ErrorComponent />
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <QuotesList
            quotesList={quotesList}
            firstItemIndex={firstItemIndex}
            lastItemIndex={lastItemIndex}
          />
          <Pagination paginationParams={rest} />
        </>
      )}
    </View>
  )
}
