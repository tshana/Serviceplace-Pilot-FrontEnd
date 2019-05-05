import React, {Component} from 'react'
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'

import globalStyle from '../../stylings'
var Users = require('../../Database/Users.json');

class ForgottenPassword extends Component{
  constructor(){super();this.state = {email: ''}}
    
  authenticate = ()=>{
    var emailExists = false
    var userNumber = null
    // Iterates through the users to see if there is any match (TODO: SERVER SIDE)
    for(var i = 0; i < Users.length; i++){
      if(Users[i].Email.toLowerCase() == this.state.email.toLowerCase()){  
        emailExists = true
        userNumber = i
        break;
      }
    }
    if(emailExists){ 
      Alert.alert("Success", "Sent temporary reset password to: " + Users[userNumber].FirstName + " at the email: " +this.state.email)
      this.props.navigation.navigate("LoginScreen")
    } 
    else{ Alert.alert("Email not found."," Please sign up or try a different email.") }
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 24}}> Forgot your Password?</Text>
        <Text style={{textAlign:'center',paddingTop:10}}> Please enter in the email address of the ServicePlace account you are trying to recover:</Text>
        
        <View style={styles.inputFields}>
          <TextInput style={[globalStyle.textField, {width:'60%'}]}  placeholder='Email Address' keyboardType='email-address' onChangeText={(typedTxt)=>{ this.setState({email: typedTxt});}}/>
          <TouchableOpacity style={[globalStyle.touchBtn,{width:'40%'}]} onPress={this.authenticate}><Text>Reset Password</Text></TouchableOpacity> 
        </View>
        
      </View>
      );
  }}
export default ForgottenPassword;

const styles = StyleSheet.create({
    container:  { flex: 1, backgroundColor: '#78909C', alignItems: 'center', paddingTop:60},
    inputFields:{ width: '100%', alignItems:'center'},
});