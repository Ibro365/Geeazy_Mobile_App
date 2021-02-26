import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UploadProject from '../screens/UploadProject';
import Review from '../screens/Review';
import listProjects from '../screens/listProjects';
import projectDetails from '../screens/projectDetails';



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
    <Tab.Screen 
      name="listProjects"
      component={listProjects}
    />
    <Tab.Screen
      name="projectDetails"
      component={projectDetails}
    />
  </Tab.Navigator>
);



export default AppStack;