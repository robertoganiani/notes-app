import { StackNavigator } from 'react-navigation'
import NotesListScreen from '../Containers/NotesListScreen'
import HomePageScreen from '../Containers/HomePageScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  NotesListScreen: { screen: NotesListScreen },
  HomePageScreen: { screen: HomePageScreen }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'HomePageScreen',
  navigationOptions: {
    // headerStyle: styles.header
  }
})

export default PrimaryNav
