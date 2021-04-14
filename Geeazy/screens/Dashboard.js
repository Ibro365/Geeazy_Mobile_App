import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const Dashboard = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
              showsVerticalScrollIndicator={false}
            >
                <Image style={styles.userImg} source={require('../assets/users/user1.jpg')}/>
                <Text style={styles.userName}>Ibrahim Moallim</Text>
                <View style={styles.userInfoWrapper}>
                    <View style={styles.userInfoItem}>
                        <Text style={styles.userInfoTitle}>1</Text>
                        <Text style={styles.userInfoSubTitle}>Project</Text>
                        <FormButton
                            buttonTitle="Edit Profile"
                        />
                        <FormButton
                            buttonTitle="Change Password"
                        />
                        <FormButton
                            buttonTitle="Change Profile Picture"
                        />
                        <FormButton
                            buttonTitle="Logout" onPress={() => logout()}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      },

      userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      userInfoItem: {
        justifyContent: 'center',
      },
      userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
      },
      userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
      },
});