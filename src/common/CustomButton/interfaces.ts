import {GestureResponderEvent} from 'react-native'

export default interface IButton {
  onPress: (event: GestureResponderEvent) => void
  label: string
  disabled?: boolean
}
