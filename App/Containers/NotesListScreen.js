import React, { Component } from 'react'
import {
  View,
  ScrollView,
  ListView,
  Text,
  TouchableOpacity,
  Button,
  Modal
} from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/NotesListScreenStyle'

class NotesListScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Notes List'
    }
  }

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({ rowHasChanged })

    this.state = {
      dataSource: ds.cloneWithRows(this.props.notes),
      modalVisible: false,
      currentNote: ''
    }
  }

  // set new dataSource from redux 
  componentWillReceiveProps(newProps) {
    if (newProps.notes) {
      this.setState(prevState => ({
        dataSource: prevState.dataSource.cloneWithRows(newProps.notes)
      }))
    }
  }

  setModalVisible = (visible, currentNote) => {
    this.setState({ modalVisible: visible, currentNote })
  }

  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
      >
        <View style={styles.modal}>
          <View>
            <Text style={styles.text}>{this.state.currentNote}</Text>
            <Button
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
              title="Close Modal Window"
            />
          </View>
        </View>
      </Modal>
    )
  }

  renderRow = (rowData) => {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this.setModalVisible(!this.state.modalVisible, rowData)}
      >
        <Text
          numberOfLines={1}
          style={styles.text}>{rowData}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        {this.renderModal()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.homepage.notes
  }
}

export default connect(mapStateToProps)(NotesListScreen)
