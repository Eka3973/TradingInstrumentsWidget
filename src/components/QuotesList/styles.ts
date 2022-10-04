import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 3,
    height: 50,
    marginVertical: 3
  },
  buttonText: {
    color: colors.blue,
    fontSize: 16
  }
})
