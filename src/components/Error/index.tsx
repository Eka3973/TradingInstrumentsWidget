import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { CommonConstants } from '../../constants'

export const ErrorComponent: FC = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{CommonConstants.errorText}</Text>
    </View>
  )
}
