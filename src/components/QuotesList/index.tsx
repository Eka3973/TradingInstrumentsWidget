import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { HomeScreenNavigationProp } from '../../navigation/types'
import Button from '../../common/CustomButton'
import { Routs } from '../../routs/routs'
import { createQuotesData } from '../Home/createQuotesData'
import { IQuotesList } from './interfaces'
import { SafeAreaView } from 'react-native-safe-area-context'

export const QuotesList: FC<IQuotesList> = ({
  quotesList,
  firstItemIndex,
  lastItemIndex
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={quotesList.slice(firstItemIndex, lastItemIndex)}
        renderItem={({ item }) => (
          <Button
            key={item.symbol}
            label={item.symbol}
            onPress={() =>
              navigation.navigate(Routs.details, createQuotesData(item))
            }
            buttonStyles={styles.button}
            buttonTextStyles={styles.buttonText}
          />
        )}
        keyExtractor={(item) => item.symbol}
      />
    </SafeAreaView>
  )
}
