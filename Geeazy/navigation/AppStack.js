import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UploadProject from '../screens/UploadProject';
import Review from '../screens/Review';



const Tab = createBottomTabNavigator();


const AppStack = ({navigation}) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
    />
    <Tab.Screen
      name="UploadProject"
      component={UploadProject}
    />
    <Tab.Screen
      name="Review"
      component={Review}
    />
  </Tab.Navigator>
);



export default AppStack;