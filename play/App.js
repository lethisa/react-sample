import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeComponent from './src/home';
import ProfileComponent from './src/profile';

const App = StackNavigator({
  Home:{
    screen:HomeComponent
  },
  Profile:{
    screen:ProfileComponent
  }
});

export default App;

