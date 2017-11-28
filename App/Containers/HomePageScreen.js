import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'

import HomePageActions from '../Redux/HomePageRedux'

// Styles
import styles from './Styles/HomePageScreenStyle'

class HomePageScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Home Page'
    }
  }

  componentDidMount() {
    // console.log('props', this.props)
  }

  handleOnCreate = (value) => {
    const { onCreateNote, clearInput } = this.props
    onCreateNote(value)
    clearInput()
  }

  renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput onChangeText={onChange} {...restInput} />
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Field name="note" component={this.renderInput} />
          <Button
            title="Create"
            onPress={handleSubmit(this.handleOnCreate)}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('NotesListScreen')}
          title="Show notes"
          style={styles.showNotesBtn}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.homepage.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateNote: (value) => {
      dispatch(HomePageActions.saveNewNote(value.note))
    },
    clearInput: () => {
      dispatch(reset('note'))
    }
  }
}

HomePageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageScreen)

export default reduxForm({
  form: 'note'
})(HomePageScreen)
