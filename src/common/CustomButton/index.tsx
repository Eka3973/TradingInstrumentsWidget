import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { IButton } from './interfaces'

const CustomButton: FC<IButton> = ({
  onPress,
  label = '',
  disabled,
  buttonStyles,
  buttonTextStyles,
  buttonDisabledStyle
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles, buttonDisabledStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={buttonTextStyles}>{label}</Text>
    </TouchableOpacity>
  )
}
export default CustomButton
