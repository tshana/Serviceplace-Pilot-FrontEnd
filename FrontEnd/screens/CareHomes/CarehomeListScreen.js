import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const careHomeDB = require('../../Database/CareHomes.json')
import Button from '../../components/Button'


class CarehomeList extends Component{
  listHomes(passedObj){
    if (careHomeDB[0].adminID == passedObj.Email){
      return(
    // Replace w/ a FlatList 
        <View>
          <Button btnText={careHomeDB[0].managedCareHomes[0].CareHome}/>
          <Button btnText={careHomeDB[0].managedCareHomes[1].CareHome}/>
        </View>) 
    }else{ alert("Not matched. " + "Admin ID: " + careHomeDB[0].adminID + " --Passed Value: "+ passedObj.FirstName)}
  }
  render(){
    const adminName = this.props.navigation.getParam('Account')
    return(
      <View style={styles.container}>
        <Text style={styles.text}>CareHome List Screen</Text>   
        {this.listHomes(adminName)}     
      </View>
      )
    }
}

export default CarehomeList

const styles = StyleSheet.create({
  container:{ flex:1 },
  text:{ fontSize: 25, color: 'rgb(244,164,96)', textAlign:'center' }
})