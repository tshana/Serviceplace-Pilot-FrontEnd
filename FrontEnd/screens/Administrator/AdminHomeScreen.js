import React, {Component} from 'react'
import {Text, View} from 'react-native'

import Button from '../../components/Button'
import Header from '../../components/Header'
import globalStyle from '../../stylings'

class AdminHomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {userData: []}
  }
  
  render(){
    const navigate = this.props.navigation.navigate
    const accountData = this.props.navigation.getParam("Account")
    
    return(
      <View style={[globalStyle.container,{justifyContent:'flex-start'}]}>
        <Header userName={accountData.FirstName}/>
        <Text style={globalStyle.txtCenter}> User Type: Administrator</Text>
        <Button btnText="Elders"           passedData={()=> navigate("ElderListScreen")}/>
        <Button btnText="Requests"         passedData={()=> navigate("RequestHistoryScreen")}/>
        <Button btnText="Employees"        passedData={()=> navigate("EmployeeListScreen")}/>
        <Button btnText="Care Homes"       passedData={()=> navigate("CareHomeList",   {Account: accountData})}/>
        <Button btnText="Account Settings" passedData={()=> navigate("AccountSettings",{Account: accountData})}/>
      </View>
    );
  }
}

export default AdminHomeScreen;