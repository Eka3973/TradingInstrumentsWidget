import { StyleProp, ViewStyle } from 'react-native'

export interface ICustomTextInput {
  handleChange: (text: string) => void
  value: string
  placeholder: string
  placeholderTextColor: string
  styles?: StyleProp<ViewStyle>
}
