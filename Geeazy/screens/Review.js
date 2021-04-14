import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Review = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
              showsVerticalScrollIndicator={false}
            >
                <Text style={styles.reviewTitle}>Search for a Company or Handyman to Review</Text>
                <FormInput placeholderText="Write the handymen or company name" />
                <FormButton buttonTitle="Search" />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Review;

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
    reviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      },
});