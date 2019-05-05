import React,{Component} from 'react'
import {Text, View} from 'react-native'
import Button from '../../components/Button'

class MultiTypeScreen extends Component{
//Navigates to the respective Home Screen of clicked button
  NavigateToScreen(Type, userObject){
    const navigate = this.props.navigation.navigate //Destructure navigation
    if (Type == "Administrator")  {navigate("AdminHomeScreen",{Account : userObject})}
    else if (Type == "Manager")   {navigate("ManagerHomeScreen",{Account : userObject})}
    else if (Type == "Volunteer") {navigate("EmployeeHomeScreen",{Account : userObject})}
    else if (Type == "Elder")     {navigate("ElderHomeScreen")}
    else if (Type == "Family")    {navigate("FamilyMemHomeScreen",{Account : userObject})}
  }
  render(){
    const userAccount = this.props.navigation.getParam('Account')
    const AccountTypes = userAccount.UserType.split(',')
    
    listItems = AccountTypes.map( (Type) => 
    <View key={Type.toString()}>
      <Button btnText={Type} passedData = {() => this.NavigateToScreen(Type, userAccount)}/>
    </View>);
    
    return(
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <Text style={{fontSize: 28, textAlign: 'center'}}> Which Account Type would you like to log into?</Text>
      </View>
      <View style={{flex:2}}>{listItems}</View>
    </View>
    );
  }
}
export default MultiTypeScreen;