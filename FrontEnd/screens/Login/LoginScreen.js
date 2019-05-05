import React,{Component} from 'react';
import {Alert, AsyncStorage, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

var Users = require('../../Database/Users.json')

import Header from '../../components/Header'
import globalStyle from '../../stylings'

class LoginScreen extends Component {
  constructor(){ 
    super();
    this.state = {name: '', password: ''} 
  }
  authenticate = ()=> {
    const navigate = this.props.navigation.navigate
    var emailExists = false
    var UserNumberInList = null

// ---------- SERVER SIDE Connection Begin ----------
// Send Server the Email and Password
//Loops through the User's List
//Check if Email Is Valid
//// If Valid check Email/Password combo
////// Return (True && Userobject) OR False
// ---------- SERVER SIDE Connection End ---------- (Use the Results to do Action #1)

//Checks to see if the entered Email address exists in the UserList
    for (var i = 0; i < Users.length; i++){
      if (Users[i].Email.toLowerCase() == this.state.name.toLowerCase()){ emailExists = true; UserNumberInList = i; }
    }
    if (emailExists){
      //Check if the password matches 
      if (Users[UserNumberInList].Password == this.state.password){
        // ACTION #1  - USE RESULTS FROM SERVER --> Saves Locally on Device
        let globalData = Users[UserNumberInList]
        AsyncStorage.setItem('userInfo', JSON.stringify(globalData))
        navigate('Auth')
      } else { Alert.alert("Login Failed","Invalid Email or Password!") }
    } else {Alert.alert("Login Failed","Email not found!")}
  }
  
  render(){
    return(
      <DismissKeyboard>
        <View style={globalStyle.container}>
          <View style={styles.top}>
            <Image style={{width: 225, height: 50}} source={require('../../Images/ServicePlaceLogo.png')}/>
            <Header userName={'to ServicePlace!'}/>
          </View>

          <View style={styles.bottom}>
            <View style={styles.inputFields}> 
              <TextInput style={globalStyle.textField} placeholder='Email Address' keyboardType='email-address' onChangeText={typedTxt=>this.setState({name: typedTxt})} onSubmitEditing={() => this.passwordInput.focus()}/>
              <TextInput style={globalStyle.textField} placeholder='Password' secureTextEntry onChangeText={typedTxt=>this.setState({password: typedTxt})} onSubmitEditing={this.authenticate} ref={(input)=>this.passwordInput = input}/>
            </View>
            
            <TouchableOpacity style={[globalStyle.touchBtn,{width:'50%'}]} onPress={this.authenticate}><Text>Login</Text></TouchableOpacity> 
            <View style={styles.forgotRegister}>
              <TouchableOpacity style={globalStyle.touchBtn} onPress={()=> this.props.navigation.navigate("RegistrationScreen") }><Text>Register</Text></TouchableOpacity> 
              <TouchableOpacity style={globalStyle.touchBtn} onPress={()=> this.props.navigation.navigate("ForgotPasswordScreen") }><Text>Forgot Password?</Text></TouchableOpacity>
            </View> 

          </View>    
      </View>
    </DismissKeyboard>
    );
  }}
export default LoginScreen;

// Hides The Keyboard From anywhere on the screen
const DismissKeyboard = ({children}) => (<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>)

const styles = StyleSheet.create({
  top:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotRegister:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
    paddingTop: 35,
   },
  bottom:{ flex: 1, alignItems: 'center'},
  inputFields:{ width: '85%'},
  
});
