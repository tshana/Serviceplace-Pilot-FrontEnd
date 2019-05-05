import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'

import Button from '../../components/Button'
import ImageHeader from '../../components/ImageHeader'

const width = Dimensions.get('window').width

class RequestDetailsScreen extends Component{
  requestAccepted(){alert("Accepted alert")}
  
  renderPermissions(requestData){
// Get the userType using the data stored in AsyncStorage to figure out what userType this user is.
    let requestStatus = requestData.complete    
    var i = "Admin"
    if(i == "Admin" || i =="Manager"|| i == "Caregiver"){ 
      if(requestStatus == "no"){
        return(
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>this.requestAccepted()} style={styles.btn}><Text>Accept Request</Text></TouchableOpacity>
          </View>)
      }
    }
    else if(i == "Elder"){
      if(requestStatus == "yes"){
        return(<View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btn}><Text>Submit Request Again</Text></TouchableOpacity></View>)
      }else{
        return(<View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.btn}><Text>Cancel Request?</Text></TouchableOpacity></View>)
      }
    }
  }
  render(){
    const param = this.props.navigation.getParam('requestObj')

    return(
      <View style={styles.container}>
        <ImageHeader txt= {"First Name + Last Name"} image='http://cdn.onlinewebfonts.com/svg/img_173956.png'/> 
        <Text style={styles.headerTxt}>Request:</Text>
        <View style={styles.wrapper}>
          <View style={[styles.historyCircle,{backgroundColor:param.type}]}></View>
          <Text style={[styles.subTxt,{paddingLeft:25}]}>{param.message}</Text>
        </View>
        <Text style={styles.headerTxt}>Status: </Text>   
        <Text style={styles.subTxt}>{param.complete}</Text>
        <Text style={styles.headerTxt}>Completed By:</Text>   
        <Text style={styles.subTxt}>{param.fulfilledBy}</Text>
        {this.renderPermissions(param)}
        <Button btnText="Request Log" passedData={()=>this.props.navigation.navigate('RequestLogScreen')}/>
      </View>
      )
    }
    
}


export default RequestDetailsScreen

const styles = StyleSheet.create({
  container:{ flex:1, },
  wrapper:{
    flexDirection: 'row',
    alignItems:'center'
  },
  historyCircle:{
    borderRadius:100,
    borderWidth:3,
    height: 35,
    width: 35,
    marginTop: 7,
    marginLeft: width*0.05
  },
  headerTxt:{
    fontSize: 30,
    marginTop: 15,
    paddingLeft: '5%',


  },
  subTxt:{
    paddingLeft: 50,
    fontSize: 22,
    fontFamily: 'Roboto-Light'
  },
  btn:{
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems:'center',
    width: '45%'
  },
})