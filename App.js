
import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import Header  from  "./src/components/header";
import Converter from "./src/components/converter";


export default class App extends Component {
  
  render () {
    return (
        <View style={styles.container}>
        <Header headerText = " Döviz Dönüştürücü"/>
        <Converter />
         </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F3F3F3",
  }
});