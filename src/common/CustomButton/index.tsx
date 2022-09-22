import {Text, TouchableOpacity} from 'react-native'
import React, {FC} from 'react'
import IButton from './interfaces'
import styles from './styles'

const CustomButton: FC<IButton> = ({onPress, label, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}
export default CustomButton
