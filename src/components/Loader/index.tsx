import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { CommonConstants } from '../../constants'

export const Loader: FC = () => {
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.loaderText}>{CommonConstants.loaderText}</Text>
    </View>
  )
}
