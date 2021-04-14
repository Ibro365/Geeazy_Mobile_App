import React from 'react';
import {createAppContainer} from 'react-navigation';
import Providers from './navigation';




const MyRootComponent = createAppContainer(Providers);

const App = () => {
  return <Providers />
  
  
}

//AppRegistry.registerComponent('MyApp', () => App);

export default App;
