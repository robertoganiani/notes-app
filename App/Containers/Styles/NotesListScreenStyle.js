import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const {
  facebook,
  border,
  backgroundColor,
  steel
} = Colors

const {
  smallMargin,
  fontSize,
  doubleBaseMargin
} = Metrics

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  row: {
    backgroundColor,
    borderWidth: 2,
    borderColor: border,
    marginTop: smallMargin
  },
  text: {
    fontSize: 25,
    color: facebook,
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    margin: doubleBaseMargin,
    backgroundColor: steel,
    borderWidth: 5,
    justifyContent: 'center'
  }
})
