import React,{Component} from 'react'
import {AsyncStorage, StyleSheet, TextInput, View,  } from 'react-native'
import ImageHeader from '../../components/ImageHeader' 
import Button from '../../components/Button'


class AccountSettings extends Component{
  constructor(props){
    super(props)
    this.state = {editable: false, editStateTxt: "Edit Info", usrName: "", birthDay: "", email: "" }
  }
  checkMultipleAccounts(account){
    var AccountTypes = account.UserType.split(',')
    if (AccountTypes.length > 1){
      return(<Button btnText='Change User Mode' passedData={()=>this.props.navigation.navigate("MultiAccountsScreen")}/>)
    }
  }
  // Logs User Out by removing Async
  logout(routeToHome){ AsyncStorage.removeItem('userInfo').then(routeToHome) }
  
  editState(){
    this.setState({editable: !this.state.editable}, function(){
      if(this.state.editable){ this.setState({editStateTxt: "Save Info"}) }
      else{
        this.setState({editStateTxt: "Edit Info"})
      // Save the state information to the server / local file. 
      }})  
  }
componentDidMount(){ this.preInfo() }

  preInfo(){
     let accountInfo = this.props.navigation.getParam('Account')
    if(accountInfo){
      this.setState({
        usrName: accountInfo.FirstName + " " + accountInfo.LastName,
        birthDay: accountInfo.birthdate,
        email: accountInfo.Email
      })  
    }else{ 
      alert("Could not get Local Account Information.") 
    }
  }

  render(){
    const navigations = this.props.navigation
    const Account = navigations.getParam('Account')
  
    return(
      <View>
        <ImageHeader txt= {Account.FirstName + " " + Account.LastName} image={Account.avatar_url}/>

        <View style={{paddingTop:15,flexDirection:'row', justifyContent:'center'}}>
          <TextInput style={styles.textField} placeholder="General Info:" editable={this.state.editable} 
          value={this.state.usrName} onChangeText={typedTxt=>this.setState({usrName: typedTxt})}/>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <TextInput style={styles.textField} placeholder="Birthdate:" editable={this.state.editable} 
          value={this.state.birthDay} onChangeText={typedTxt=>this.setState({birthDay: typedTxt})}/>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <TextInput style={styles.textField} placeholder="Email:" editable={this.state.editable} 
          value={this.state.email} onChangeText={typedTxt=>this.setState({email: typedTxt})}/>
        </View>

        <Button btnText={this.state.editStateTxt} customStyle={{width:'50%'}} passedData={()=>this.editState()}/>

        <Button btnText='Documents'    passedData={()=>alert('No Documents Available')}/>
        <Button btnText='Fulfillments' passedData={()=>alert('No Fufillments Available')}/>
      
        <Button btnText='Change Password' passedData={()=>navigations.navigate("PasswordSettings",{Account: Account})}/>
        {this.checkMultipleAccounts(Account)}
        {/* Call AsyncStorage and delete Info before passing back to LoginScreen */}
        <Button btnText='Logout' passedData={()=>this.logout(navigations.navigate("LoginScreen"))}/>

      </View>
  );
}}

export default AccountSettings

const styles = StyleSheet.create({
  textField:{
    backgroundColor:'rgba(255,255,255,0.4)',
    height: 40,
    textAlign: 'center',
    margin: 7,
    width: '70%',

  },
  headerTxt:{
    fontSize:23, padding:15, textAlign:'center'}
})