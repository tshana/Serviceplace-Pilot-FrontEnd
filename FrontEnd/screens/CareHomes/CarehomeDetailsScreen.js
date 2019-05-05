import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class CarehomeDetails extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>CareHome Details Screen</Text> 
        <Text>Address:</Text>       
      </View>
      )
    }
}

export default CarehomeDetails

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize: 25, color: 'blue'
  }
})