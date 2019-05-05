import React,{Component} from 'react'
import {StyleSheet, View, Text,TextInput} from 'react-native'

import Button from '../../components/Button'
import globalStylings from '../../stylings'

class AddEmployee extends Component{
  constructor(){
    super();
    this.state = {name: "", birthdate: "", userRole: "", careHome:"" }
  }
  verifyAddition(){
    // First check if we can connect to server. Then send alert whether or not it was added. 
    alert("Error: Connection to Server Failed. Name: " + this.state.name)
  }
  render(){
    return(
      <View>
          <Text style={globalStylings.headerTxt}>Add New User</Text>
          
          <Text style={styles.centerTxt}>Name:</Text>
          <TextInput style={globalStylings.textField} placeholder="First and Last Name" onChangeText={txt => this.setState({name: txt})}/>
       
          <Text style={styles.centerTxt}>Birthdate:</Text>
          <TextInput style={globalStylings.textField}  placeholder="mm/dd/yyyy" onChangeText={txt => this.setState({birthdate: txt})}/>       

          <Text style={styles.centerTxt}>User Role:</Text>
          <TextInput style={globalStylings.textField}  placeholder="Enter User Roles" onChangeText={txt => this.setState({userRole: txt})}/>
          
          <Text style={styles.centerTxt}>Care Home:</Text>
          <TextInput style={globalStylings.textField}  placeholder="Care Home" onChangeText={txt => this.setState({careHome: txt})}/>
          
          <Button btnText='Confirm' passedData={()=>this.verifyAddition()}/>
      </View>

  );
}}

export default AddEmployee

const styles = StyleSheet.create({
centerTxt:{textAlign:'center'},
})