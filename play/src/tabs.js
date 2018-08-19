import { Navigation } from 'react-native-navigation';

import HomeIcon from './assets/icons/home.png';
import ProfileIcon from './assets/icons/profile.png';
import PostsIcon from './assets/icons/posts.png';
import MenuIcon from './assets/icons/menu.png';

const loadTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "play.HomeScreen",
                label: "Home",
                title: "Home",
                icon: HomeIcon,
            },
            {
                screen: "play.PostsScreen",
                label: "Posts",
                title: "Posts",
                icon: PostsIcon
            },
            {
                screen: "play.ProfileScreen",
                label: "Profile",
                title: "Profile",
                icon: ProfileIcon,
                navigatorStyle:{
                    navBarTextColor:'red',
                    navBarBackgroundColor:'blue'
                },
                navigatorButtons: {
                     leftButtons: [{
                         title: "Drawer",
                         id: "DrawerButton",
                         icon: MenuIcon
                     }]
                 }
            }
        ],
        drawer:{
            left:{
                screen:"play.SidedrawerScreen",
                fixedWidth:200
            }
        }
    })
}

export default loadTabs;