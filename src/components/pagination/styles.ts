import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white
  },

  button: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderColor: colors.blue
  },

  buttonLeft: {
    borderTopWidth: 25,
    borderRightWidth: 50,
    borderBottomWidth: 25,
    borderLeftWidth: 0
  },
  buttonRight: {
    borderTopWidth: 25,
    borderRightWidth: 0,
    borderBottomWidth: 25,
    borderLeftWidth: 50
  },

  buttonDisabledStyle: {
    borderColor: colors.lightGrey
  },
  ranges: {
    fontSize: 19,
    color: colors.blue
  }
})
