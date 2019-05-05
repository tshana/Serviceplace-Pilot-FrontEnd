import React,{Component} from 'react'
import {StyleSheet, View, TouchableOpacity, Image,Text} from 'react-native';
import Communications from 'react-native-communications';

import Header from '../../components/Header'

const PhoneArguments = {
  number: '602-555-5555', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

class ElderHomeScreen extends Component {
  render(){
    const navigations  = this.props.navigation
    const account = navigations.getParam('Account')
    
    return(
    <View style={styles.container}>
      <Image style={{width: 225, height: 50}} source={require('../../Images/ServicePlaceLogo.png')}/>
      <Header userName={account.FirstName}/>
{/* -------- TO DO: --------> Call Queue */}
      <TouchableOpacity  style={[styles.circle, styles.red]}    onPress={()=> Communications.phonecall(PhoneArguments.number, false)}/> 
      <TouchableOpacity  style={[styles.circle, styles.yellow]} onPress={()=> navigations.navigate("NewRequestS",{requestType:'yellow'})}/>
      <TouchableOpacity  style={[styles.circle, styles.green]}  onPress={()=> navigations.navigate("NewRequestS",{requestType:'green'})}/>    
      <TouchableOpacity  style={styles.btn} onPress={()=> navigations.navigate("RequestHistoryScreen")}><Text>History</Text></TouchableOpacity>
      <TouchableOpacity  style={styles.btn} onPress={()=> navigations.navigate("AccountSettings",{Account: account})}><Text>Account Settings</Text></TouchableOpacity>
    </View>
    );
  }
}

export default ElderHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
   },

  circle: {
    width: 180,
    height: 180,
    borderRadius: 180/2,
    marginBottom: 15,
    marginTop: 10,
  },
green:  {backgroundColor:'#0D8E11'},
yellow: {backgroundColor:'#F7EB33'},
red:    {backgroundColor:'#F32D0A'},
btn:{
  width: 200,
  backgroundColor: '#f8f8f8',
  padding: 10,
  borderRadius: 10,
  margin: 10,
  alignItems:'center',
}
});
