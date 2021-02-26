import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_PROJECT = gql`
    mutation AddProject(
        $worktype: String!,
        $projectname: String!,
        $projectdesc: String!,
        $budget: Number!,
        $city: String!,
        $contactinfo: String!) {
        addProject(
            worktype: $worktype,
            projectname: $projectname,
            projectdesc: $projectdesc,
            budget: $budget,
            city: $city,
            contactinfo: $contactinfo) {
            _id
        }
    }
`;

class UploadProject extends Component {
    static navigationOptions = {
      title: 'Add Project',
    };
  
    state = {
      worktype: '',
      projectname: '',
      projectdesc: '',
      budget: '',
      city: '',
      contactinfo: '',
    }
  
    updateTextInput = (text, field) => {
      const state = this.state
      state[field] = text;
      this.setState(state);
    }
    
    render() {
      const { isbn, title, author, description, published_year, publisher } = this.state;
      return (
        <Mutation mutation={ADD_PROJECT} onCompleted={() => this.props.navigation.goBack()}>
            {(addProject, { loading, error }) => (
              <ScrollView style={styles.container}>
                <View style={styles.subContainer}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Enter a Category of work'}
                      value={this.state.worktype}
                      onChangeText={(text) => this.updateTextInput(text, 'worktype')}
                  />
                </View>
                <View style={styles.subContainer}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Enter Project Name'}
                      value={this.state.projectname}
                      onChangeText={(text) => this.updateTextInput(text, 'projectname')}
                  />
                </View>
                <View style={styles.subContainer}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Describe your project here...'}
                      multiline={true}
                      numberOfLines={4}
                      value={this.state.projectdesc}
                      onChangeText={(text) => this.updateTextInput(text, 'projectdesc')}
                  />
                </View>
                <View style={styles.subContainer}>
                  <TextInput
                      keyboardType="numeric"
                      style={styles.textInput}
                      placeholder={'Enter Budget Price'}
                      value={this.state.budget}
                      onChangeText={(text) => this.updateTextInput(text, 'budget')}
                  />
                </View>
                <View style={styles.subContainer}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Enter City'}
                      value={this.state.city}
                      onChangeText={(text) => this.updateTextInput(text, 'city')}
                  />
                </View>
                <View style={styles.subContainer}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Enter your email address or phone number'}
                      value={this.state.contactinfo}
                      onChangeText={(text) => this.updateTextInput(text, 'contactinfo')}
                  />
                </View>
                <View>
                  <Button
                    large
                    leftIcon={{name: 'save'}}
                    title='Save'
                    onPress={() => {
                      addProject({
                        variables: {
                          worktype: this.state.worktype,
                          projectname: this.state.projectname,
                          projectdesc: this.state.projectdesc,
                          budget: parseInt(this.state.budget),
                          city: this.state.city,
                          contactinfo: parseInt(this.state.contactinfo),
                        }
                      })
                        .then(res => this.setState({ worktype: '', projectname: '', projectdesc: '', budget, city: '', contactinfo: '' }))
                        .catch(err => <Text>{err}</Text>);
                    }} />
                </View>
                {loading && <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>}
                {error && <Text>`Error! ${error.message}`</Text>}
              </ScrollView>
            )}
          </Mutation>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    subContainer: {
      flex: 1,
      marginBottom: 20,
      padding: 5,
      borderBottomWidth: 2,
      borderBottomColor: '#CCCCCC',
    },
    activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput: {
      fontSize: 18,
      margin: 5,
    },
  })
  
  export default UploadProject;