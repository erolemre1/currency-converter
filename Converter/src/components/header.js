import React, {Component} from "react";
import {Text, StyleSheet, View} from "react-native";



export default class header extends Component{
    render(){
      const {headerText, header} = styles;
        return(
            <View style={header}>
<Text style={headerText}>{this.props.headerText} </Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
       width: 480,
        height: 70,   
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#788B91",
      },
      headerText: {
        fontSize: 30,
        color:"white",
        textAlign:"center",
       
      }
    });
    