import React, { Component } from 'react';
import { StyleSheet, Text, View , Animated, Easing, Button } from 'react-native';

class AnimOne extends Component{
    state = {
        // redSquare: new Animated.ValueXY(0,0)
        redSquare: new Animated.Value(1)
    }

    // componentWillMount(){
    //     // this.redSquare = new Animated.ValueXY(0,0);

    //     // Animated.spring(this.redSquare,{
    //     //     toValue:{x:100,y:300},
    //     //     friction:1
    //     // }).start();

    //     // Animated.timing(this.state.redSquare,{
    //     //     toValue:{x:100,y:300},
    //     //     duration:2000,
    //     //     delay:1000,
    //     //     easing:Easing.bounce
    //     // }).start();
    // }

    runAnim = () =>{
        Animated.timing(this.state.redSquare, {
            // toValue:{x:100,y:300},
            toValue:0,
            duration:2000,
            delay:1000,
            // easing:Easing.bounce
        }).start();
    }

    render(){
        return(
            <View>
                <Animated.View
                    style={{
                        opacity:this.state.redSquare,
                        // left:this.state.redSquare.interpolate({
                        //     inputRange:[0,1],
                        //     outputRange:[200,0]
                        // })

                        transform:[
                            {
                                rotateX:this.state.redSquare.interpolate({
                                    inputRange:[0,0.5,1],
                                    outputRange:['0deg','180deg','0deg']
                                })
                            }
                        ]

                        // top: this.state.redSquare
                    }}

                    // style={
                    //     this.state.redSquare.getLayout()
                    // }

                // style={{
                //     left:this.redSquare.x,
                //     top:this.redSquare.y
                // }}
                >
                    <View style={styles.square}>
                        <Animated.Text
                            style={{
                                fontSize:this.state.redSquare.interpolate({
                                    inputRange:[0,0.5,1],
                                    outputRange:[20,5,30]
                                }),
                                color:this.state.redSquare.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['blue','white']
                                })
                            }}
                        >
                            <Text>Hai</Text>
                        </Animated.Text>
                    </View>
                </Animated.View>

                <Button
                    title="Strat Animation"
                    onPress={this.runAnim}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square:{
        width:100,
        height:100,
        backgroundColor:'blue'
    }
})

export default AnimOne;

