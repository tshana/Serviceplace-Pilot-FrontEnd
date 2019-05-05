import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import globalStyle from '../../stylings'
import Header from '../../components/Header'
import Button from '../../components/Button'


class ManagerHomeScreen extends Component{
  render(){
    const navigations = this.props.navigation
    const Account = navigations.getParam('Account')
    
    return(
      <View style={[globalStyle.container,styles.container]}>
        <Header userName={Account.FirstName}/>
        <Text style={{textAlign:"center"}}>User Type: Manager</Text>
        <Button btnText="Elders" passedData={()=>navigations.navigate("ElderListScreen")}/>
        <Button btnText="Requests" passedData={()=>navigations.navigate("RequestHistoryScreen")}/>
        <Button btnText="Employees" passedData={()=>navigations.navigate("EmployeeListScreen")}/>
        <Button btnText="Account Settings" passedData={()=>navigations.navigate("AccountSettings",{Account: Account})}/>
      </View>
    );
  }
}

export default ManagerHomeScreen

const styles = StyleSheet.create({
  container:{justifyContent:'flex-start'},
});
