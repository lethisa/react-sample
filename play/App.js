// import React from 'react';
// import { StackNavigator } from 'react-navigation';

// import HomeComponent from './src/home';
// import ProfileComponent from './src/profile';

// const App = StackNavigator({
//   Home:{
//     screen:HomeComponent
//   },
//   Profile:{
//     screen:ProfileComponent
//   }
// });

// export default App;

import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/home';
import ProfileScreen from './src/profile';
import PostsScreen from './src/posts';
import SidedrawerComponent from './src/sidedrawer';

Navigation.registerComponent("play.HomeScreen", ()=>HomeScreen);
Navigation.registerComponent("play.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent("play.PostsScreen", () => PostsScreen);
Navigation.registerComponent("play.SidedrawerScreen", () => SidedrawerComponent);

Navigation.startSingleScreenApp({
  screen:{
    screen:"play.HomeScreen",
    title:"Home"
  }
})

