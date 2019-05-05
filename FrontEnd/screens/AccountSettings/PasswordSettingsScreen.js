import React,{Component} from 'react'
import {StyleSheet, View, Text,TextInput} from 'react-native'

import Button from '../../components/Button'
import globalStylings from '../../stylings'

class PasswordSettingsScreen extends Component{
  constructor(){
    super();
    this.state = {currentPass: "", newPass: "", newPassReEntry: "" }
  }
  verifyPasswords(currentAccount){
    // First check if current password matches 
    if(currentAccount.Password == this.state.currentPass){
      if(this.state.newPass == this.state.newPassReEntry){
        // Ask server to edit and update the user's password. AND Catch any errors from server here.
        alert("Password Updated. Please log in again.")
      }
      else{alert("New Passwords do not match.")}
    }
    else{alert("Current Password is incorrect ( OR Password fields are incorrect)")}
  }
  render(){
    const navigations = this.props.navigation
    const Account = navigations.getParam('Account')

    return(
      <View>
          <Text style={globalStylings.headerTxt}>Update Password Settings</Text>
          
          <Text style={styles.centerTxt}>Current Password:</Text>
          <TextInput style={globalStylings.textField} secureTextEntry placeholder="Current Password"  onChangeText={txt => this.setState({currentPass: txt})} />
          
          <Text style={styles.centerTxt}>New Password:</Text>
          <TextInput style={globalStylings.textField} secureTextEntry placeholder="New Password" onChangeText={txt => this.setState({newPass: txt})} />
          
          <Text style={styles.centerTxt}>Re-enter New Password:</Text>
          <TextInput style={globalStylings.textField} secureTextEntry placeholder="Re-enter Password" onChangeText={txt => this.setState({newPassReEntry: txt})} />
          
          <Button btnText='Confirm' passedData={()=>this.verifyPasswords(Account)}/>
      </View>

  );
}}

export default PasswordSettingsScreen

const styles = StyleSheet.create({
centerTxt:{textAlign:'center'},
})