import { TextInput } from 'react-native'
import React, { FC } from 'react'
import { ICustomTextInput } from './interfaces'

const CustomTextInput: FC<ICustomTextInput> = ({
  handleChange,
  value,
  placeholder,
  placeholderTextColor,
  styles
}) => {
  return (
    <TextInput
      onChangeText={(text) => handleChange(text)}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      style={styles}
    />
  )
}
export default CustomTextInput
