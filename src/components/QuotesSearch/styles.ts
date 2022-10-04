import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 30
  },
  inputSearch: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    paddingLeft: 15,
    backgroundColor: colors.extraLightBlue,
    borderRadius: 6,
    marginVertical: 10,

    borderColor: colors.darkBlue,
    color: colors.darkBlue
  }
})
