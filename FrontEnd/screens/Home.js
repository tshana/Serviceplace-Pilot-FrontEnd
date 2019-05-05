import React,{Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

// ********* NOTE *********
// We are keeping this as a TEMPORARY "Universal" home page until there is a better solution for Role Based Navigation.

class Home extends Component{
  renderHome(account){
    const Type = account.UserType.split(',')
    const navigate = this.props.navigation.navigate 
    if(Type.length > 1){ navigate("MultiAccountsScreen",             {Account: account})}
    else{
      if (Type ==  "Administrator")  {navigate("AdminHomeScreen",    {Account : account})}
      else if (Type ==   "Manager")  {navigate("ManagerHomeScreen",  {Account : account})}
      else if (Type == "Volunteer")  {navigate("EmployeeHomeScreen", {Account : account})}
      else if (Type ==     "Elder")  {navigate("ElderHomeScreen",    {Account : account})}
      else if (Type ==    "Family")  {navigate("FamilyMemHomeScreen",{Account : account})}
    }
  }
  render(){
    const getAccount = this.props.navigation.getParam('Account')
    return(
    <View style={{flex:1}}>
      {this.renderHome(getAccount)} 
      <Text style={{textAlign:'center'}}>** This is a temporary screen for debugging purposes. Return back.</Text>
      <TouchableOpacity style={{backgroundColor:'lightgreen', width: '100%', flex:2}} onPress={()=>this.renderHome(getAccount)}>
        <Text style={{fontSize:32, textAlign:'center'}}>Tap to Go Back to Home Page</Text>
      </TouchableOpacity>
      
    </View>
    );
  }
}
export default Home;