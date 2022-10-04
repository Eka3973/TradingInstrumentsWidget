import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native'

export interface IButton {
  onPress: (event: GestureResponderEvent) => void
  label?: string
  disabled?: boolean
  buttonStyles?: StyleProp<ViewStyle>
  buttonTextStyles?: StyleProp<TextStyle>
  buttonDisabledStyle?: StyleProp<TextStyle> | null
}
