import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {useRoute} from '@react-navigation/native'
import styles from './styles'
import {DetailsScreenRouteProp} from '../../navigation/types'

export const Details: FC = () => {
  const route = useRoute<DetailsScreenRouteProp>()
  const {name, id} = route.params

  return (
    <View>
      <Text style={styles.description}>{id}</Text>
      <Text style={styles.description}>{name}</Text>
    </View>
  )
}
