import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/colors'

export default StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderText: {
    color: colors.blue,
    fontSize: 25
  }
})
