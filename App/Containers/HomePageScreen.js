import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomePageScreenStyle'

class HomePageScreen extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: 'Home Page'
    }
  }

  onInputChange = (event) => {
    console.log(event)
  }

  handleOnCreate = () => {
    console.log('created')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onInputChange}
        />
        <Button
          title='Create'
          onPress={this.handleOnCreate}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageScreen)
