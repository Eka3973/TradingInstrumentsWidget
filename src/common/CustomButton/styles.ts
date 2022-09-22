import {StyleSheet} from 'react-native'
import {colors} from '../../assets/styles/colors'

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.green,
    padding: 8,
    marginBottom: 5
  },
  buttonText: {
    color: colors.green,
    fontSize: 16
  }
})
