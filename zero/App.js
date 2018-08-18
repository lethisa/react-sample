import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';

import Nav from './src/nav/nav';
import Generate from './src/generate/generate';
import ListItem from './src/generate/listitem';
import Input from './src/input/input';
import PickerComponent from './src/picker/picker'; 
import Mountain from './src/assets/images/img-01.jpg';
import ModalComponent from './src/modal/modal';

class App extends React.Component {

  state = {
    nameOfApp:"My Awesme App",
    random:[12,13],
    loading:false
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return{
        random: [...prevState.random, random]
      }
    })
  }

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index)=>{
      return i !==index;
    });
    this.setState({
      random:newArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}/>
        <ScrollView 
          style={{width:'100%'}}
          // onContentSizeChange={(w,h)=>alert(h)}
          // onMomentumScrollBegin={()=>alert('begin')}
          // onMomentumScrollEnd={()=>alert('end')}
          // onScroll={()=>alert('scroll')}
          >

          <View style={styles.wrapper}>
            <Generate add={this.onAddRandom} />
            <ListItem items={this.state.random} delete={this.onItemDelete} />
            {/* <Input /> */}
            {/* <PickerComponent/> */}
            {/* <ActivityIndicator
              size="large"
              color="red"
              animating={this.state.loading}  
            /> */}
            {/* <Image
              // source={Mountain}
              source={{uri:'https://avatars.githubusercontent.com/u/1060397'}}
              style={styles.mountain}
              resizeMode="contain"
              // onLoadEnd={()=>alert('img loading')}

            /> */}
            <ModalComponent/>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:20,
  },
  wrapper:{
    flex:1,
    width:'100%',
    padding:20,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  mountain:{
    width:'100%',
    height:300,
    marginTop:20
  }
});

export default App;