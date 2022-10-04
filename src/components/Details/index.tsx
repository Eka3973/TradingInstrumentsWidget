import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './styles'
import { DetailsScreenRouteProp } from '../../navigation/types'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Details: FC = () => {
  const route = useRoute<DetailsScreenRouteProp>()
  const { params } = route

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={params}
        renderItem={({ item }) => (
          <View style={styles.details}>
            <Text style={[styles.detailsItem, styles.detailsItem_color]}>
              {item.name}:
            </Text>
            <Text style={styles.detailsItem}>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  )
}
