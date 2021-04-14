import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, Card, UserInfo, UserName, UserInfoText, UserImg, PostTime, PostWorkType, PostProjectName, PostProjectDesc, PostImg, InteractionWrapper, Interaction, InteractionText} from '../styles/FeedStyles';
import {minBudget} from '../styles/FeedStyles2';

const Home = () => {
    
    return (
        <Container>
           <Card>
               <UserInfo>
                <UserImg source={require('../assets/users/user1.jpg')} />  
                <UserInfoText>
                <UserName>Ibrahim Moallim</UserName>
                <PostTime>2 hours ago</PostTime>
                </UserInfoText>
               </UserInfo>
               <PostWorkType>Type Of Work: General Services</PostWorkType>
               <PostProjectName>Project Name: Repair a leaking Sink</PostProjectName>
               <PostProjectDesc>Project Description: My kitchen sink has been leaking due to the drain being worn out. I would like to request a handymen to come and replace it for me</PostProjectDesc>
               <PostImg source={require('../assets/posts/sink.jpg')}></PostImg>
               <InteractionWrapper>
                   <Interaction>
                       
                       <Text>Offers: 3</Text>
                   </Interaction>
               </InteractionWrapper>
               
            </Card>

            <Card>
               <UserInfo>
                <UserImg source={require('../assets/users/user1.jpg')} />  
                <UserInfoText>
                <UserName>Rezwan Tarin</UserName>
                <PostTime>4 hours ago</PostTime>
                </UserInfoText>
               </UserInfo>
               <PostWorkType>Type Of Work: Plumbing</PostWorkType>
               <PostProjectName>Project Name: Repair Garbage Disposal Unit</PostProjectName>
               <PostProjectDesc>Project Description: I noticed that my garbage disposal has been jammed. I would like to request a plumber to come and fix it.</PostProjectDesc>
               <InteractionWrapper>
                   <Interaction>
                       <Text>Offers</Text>
                   </Interaction>
               </InteractionWrapper>
               
            </Card>
        </Container>
    );
}

export default Home;

