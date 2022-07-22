import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
  
  
  export default class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

render(){
  return(
      <View style = {styles.tittleTextContainer}>
        <Text style = {styles.tittleText}>Turn On Alarm</Text>
      </View>
  )
}
}





const styles = StyleSheet.create({
  tittleTextContainer: {
    alignItems: "center"
  },
  tittleText: {
    fontSize: RFValue(20)
  }
})