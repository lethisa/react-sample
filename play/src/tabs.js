import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeIcon from './assets/icons/home.png';
// import ProfileIcon from './assets/icons/profile.png';
// import PostsIcon from './assets/icons/posts.png';
// import MenuIcon from './assets/icons/menu.png';

// const HomeIcon = Icon.getImageSource('home',20,'white').then((source)=>{
//     return source;
// })

const loadTabs = () => {

    Promise.all([
        Icon.getImageSource("home",20,'white'),
        Icon.getImageSource("music", 20, 'white'),
        Icon.getImageSource("star", 20, 'white'),
        Icon.getImageSource("bars", 20, 'white')
    ]).then(sources =>{
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "play.ProfileScreen",
                    label: "Profile",
                    title: "Profile",
                    icon: sources[0],
                    navigatorStyle: {
                        navBarTextColor: 'red',
                        navBarBackgroundColor: 'green'
                    },
                    navigatorButtons: {
                        leftButtons: [{
                            title: "Drawer",
                            id: "DrawerButton",
                            icon: sources[3]
                        }]
                    }
                },
                {
                    screen: "play.PostsScreen",
                    label: "Posts",
                    title: "Posts",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [{
                            title: "Drawer",
                            id: "DrawerButton",
                            icon: sources[3]
                        }]
                    }
                },
                {
                    screen: "play.ContactsScreen",
                    label: "Contact",
                    title: "Contact",
                    icon: sources[2]
                }
            ],
            drawer: {
                left: {
                    screen: "play.SidedrawerScreen",
                    fixedWidth: 200
                }
            }
        })
    })

    
}

export default loadTabs;