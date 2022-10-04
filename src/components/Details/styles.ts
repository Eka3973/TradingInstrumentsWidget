import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/colors'

export default StyleSheet.create({
  container: {
    padding: 20
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  detailsItem: {
    color: colors.darkGray,
    fontSize: 16,
    paddingRight: 10
  },
  detailsItem_color: {
    color: colors.darkBlue,
    fontWeight: 'bold'
  }
})
