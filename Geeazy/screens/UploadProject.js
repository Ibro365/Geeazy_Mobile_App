import React, { useState , useContext} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import { InputField, InputWrapper } from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker'
import firestore from '@react-native-firebase/firestore';

import {
    AddImage,
    SubmitBtn,
    SubmitBtnText,
} from '../styles/AddPost'

import { AuthContext } from '../navigation/AuthProvider';


const UploadProject = () => {

    //const [user, logout] = useContext(AuthContext);

    const {workType, setworkType} = useState(null);
    const {projectName, setprojectName} = useState(null);
    const {projectDesc, setprojectDesc} = useState(null);
    const {minBudget, setminBudget} = useState(null);
    const {maxBudget, setmaxBudget} = useState(null);
    const {city, setCity} = useState(null);
    const {contactInfo, setcontactInfo} = useState(null);
    
    const [image, setImage] = useState(null);

        const takePhotoFromCamera = () => {
            ImagePicker.openCamera({
                width: 1200,
                height: 700,
                cropping: true,
            }).then((image) => {
                console.log(image);
                const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                setImage(imageUri);
            });
        };

        const choosePhotoFromLibrary = () => {
            ImagePicker.openPicker({
                width: 1200,
                height: 700,
                cropping: true,
            }).then((image) => {
                console.log(image);
                const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                setImage(imageUri);
            });
        };

        const submitPost = async () => {
            firestore()
            .collection('posts')
            .add({
                //userId: user.uid,
                workType: workType,
                projectName: projectName,
                projectDesc: projectDesc,
                minBudget: setminBudget,
                maxBudget: setmaxBudget,
                city: city,
                contactInfo: contactInfo,
            })
            .then(() => {
                console.log('Post Adeded');
                //setworkType(null);
                setprojectName(null);
                setprojectDesc(null);
                setminBudget(null);
                setmaxBudget(null);
                setCity(null);
                setcontactInfo(null);
            })
            .catch((error) => {
                console.log('Something went wrong with the post.' , error);
            });
        }

        return(
            
            <View style={styles.container}>
            <InputWrapper>
                {image != null ? <AddImage source={{uri: image}} /> : null}
                <InputField
                    placeholder="What type of work do you require?"
                    multiline
                    numberOfLine={4}
                    value={workType}
                    onChangeText={(content) => setworkType(content)}
                />
                <InputField
                    placeholder="What is your project name?"
                    multiline
                    numberOfLine={1}
                    value={projectName}
                    onChangeText={(content) => setprojectName(content)}
                />
                <InputField
                    placeholder="Describe your project"
                    multiline
                    numberOfLine={4}
                    value={projectDesc}
                    onChangeText={(content) => setprojectDesc(content)}
                />
                <InputField
                    placeholder="Enter your minimum budget"
                    multiline
                    numberOfLine={1}
                    value={minBudget}
                    onChangeText={(content) => setminBudget(content)}
                />
                <InputField
                    placeholder="Enter your maximum budget"
                    multiline
                    numberOfLine={1}
                    value={maxBudget}
                    onChangeText={(content) => setmaxBudget(content)}
                />
                <InputField
                    placeholder="Enter City"
                    multiline
                    numberOfLine={1}
                    value={city}
                    onChangeText={(content) => setCity(content)}
                />
                <InputField
                    placeholder="Enter your email or phone number"
                    multiline
                    numberOfLine={1}
                    value={contactInfo}
                    onChangeText={(content) => setcontactInfo(content)}
                />
                <SubmitBtn onPress={submitPost}>
                    <SubmitBtnText>Post</SubmitBtnText>
                </SubmitBtn>
            </InputWrapper>
            <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={takePhotoFromCamera}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={choosePhotoFromLibrary}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
        </View>
        );
    
};

export default UploadProject;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

});