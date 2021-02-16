import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const Review = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Review Page</Text>
        </View>
    );
}

export default Review;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});