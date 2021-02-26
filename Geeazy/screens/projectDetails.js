import React, { Component } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_PROJECT = gql`
    query project($projectId: String) {
        project(id: $projectId) {
            _id
            worktype
            projectname
            projectdesc
            budget
            city
            contactinfo
        }
    }
`;

const DELETE_PROJECT = gql`
  mutation removeProject($id: String!) {
    removeProject(id:$id) {
      _id
    }
  }
`;

class ProjectDetails extends Component {
    static navigationOptions = {
      title: 'Project Details',
    };
    render() {
      const { navigation } = this.props;
      return (
          <Query pollInterval={500} query={GET_PROJECT} variables={{ projectId: navigation.getParam('id') }}>
              {({ loading, error, data }) => {
                  if (loading) return(<View style={styles.activity}>
                      <ActivityIndicator size="large" color="#0000ff" />
                    </View>);
                  if (error) return(<Text>`Error! ${error.message}`</Text>);
                  return (
                      <ScrollView>
                          <Card style={styles.container}>
                              <View style={styles.subContainer}>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Category of work:</Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.project.worktype}</Text>
                                  </View>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Project Name: </Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.project.name}</Text>
                                  </View>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Project Description: </Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.project.description}</Text>
                                  </View>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Enter Budget Price: </Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.book.description}</Text>
                                  </View>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>City: </Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.book.published_year}</Text>
                                  </View>
                                  <View>
                                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Contact Information: </Text>
                                      <Text style={{fontSize: 18, marginBottom: 10}}>{data.book.publisher}</Text>
                                  </View>
                                  
                              </View>
                              <Mutation mutation={DELETE_PROJECT} key={data.project._id} onCompleted={() => navigation.goBack()}>
                                  {(removeProject, { loading2, error2 }) => (
                                      <View style={styles.subContainer}>
                                          <Button
                                          style={styles.detailButton}
                                          large
                                          backgroundColor={'#CCCCCC'}
                                          leftIcon={{name: 'edit'}}
                                          title='Edit'
                                          onPress={() => {
                                              navigation.navigate('EditProject', { id: `${data.project._id}`, });
                                          }} />
                                          <Button
                                          style={styles.detailButton}
                                          large
                                          backgroundColor={'#999999'}
                                          color={'#FFFFFF'}
                                          leftIcon={{name: 'delete'}}
                                          title='Delete'
                                          onPress={() => {
                                              removeProject({ variables: { id: data.project._id } })
                                              .then(res => res)
                                              .catch(err => <Text>{err}</Text>);
                                          }} />
                                          {loading2 && <View style={styles.activity}>
                                              <ActivityIndicator size="large" color="#0000ff" />
                                            </View>}
                                          {error2 && <Text>`Error! ${error2.message}`</Text>}
                                      </View>
                                  )}
                              </Mutation>
                          </Card>
                      </ScrollView>
                  );
              }}
          </Query>
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
        paddingBottom: 20,
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
    detailButton: {
        marginTop: 10
    }
})

export default ProjectDetails;