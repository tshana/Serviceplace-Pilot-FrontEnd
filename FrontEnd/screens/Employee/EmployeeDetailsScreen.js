import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Divider from 'react-native-divider'
import DeviceInfo from 'react-native-device-info'
import globalStyles from '../../stylings'

function RenderDetails(item){
  return(
    <View>
      <View style={styles.Header}>
        <Image style={{width: 80, height: 80}} 
          source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_173956.png'}}/>
      </View>
      
      <Divider borderColor="black" color='black' orientation="center">
        <Text style={styles.HeaderText}>{item.FirstName} {item.LastName} </Text>
      </Divider>

      <View style={styles.Details}>
        <Text style={styles.DetailsText}>Age: {item.Age}</Text>
        <Text style={styles.DetailsText}>Birthday: {item.Birthday}</Text>
        <Text style={styles.DetailsText}>CareHome: {item.CareHome}</Text>
        <Text style={styles.DetailsText}>EmployeeID: {item.EmployeeID}</Text>
      </View>
      
      <View style={styles.Details}>
        <TouchableOpacity style={[globalStyles.touchBtn,{width:'50%'}]}>
          <Text>Personal Information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.touchBtn,{width:'50%'}]}>
          <Text>Family Members</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.touchBtn,{width:'50%'}]}>
          <Text>Requests</Text>
        </TouchableOpacity>
      </View>
      {RenderTabletButtons()}
    </View>
  );
}

function RenderTabletButtons(){
  if(DeviceInfo.isTablet()==true){
    return(
      <View style={styles.Details}>
        <TouchableOpacity style={[styles.AdminBtn,{width:'60%'}]}>
          <Text>Delete Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.AdminBtn,{width:'60%'}]}>
          <Text>Add Employee</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ElderDetailsScreen extends Component{
  render(){
    const item = this.props.navigation.getParam('item');
    return(
      RenderDetails(item)
      );
    }
  }
  
export default ElderDetailsScreen

const styles = StyleSheet.create({
  HeaderText:{ fontSize:30 },
  Header:{ flexDirection: 'row', justifyContent: 'center'},
  Details:{alignItems: 'center'},
  DetailsText:{fontSize:20,},

  AdminBtn:{
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
  },
});