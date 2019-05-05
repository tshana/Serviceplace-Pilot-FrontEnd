import React,{Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Button from '../../components/Button'
import Header from '../../components/Header'
import globalStyles from '../../stylings'

class EmployeeHomeScreen extends Component{
  render(){
    const navigations = this.props.navigation
    const Account = navigations.getParam('Account')
    return (
      <View style={[globalStyles.container,styles.elderContainer]}>
        <Header userName={Account.FirstName}/>
        <Text style={{textAlign:'center'}}>User Type: Employee</Text>
        <Button btnText="Elders"   passedData={()=>navigations.navigate("ElderListScreen")}/>
        <Button btnText="Requests" passedData={()=>navigations.navigate("RequestHistoryScreen")}/>
        <Button btnText="Account Settings" passedData={()=>navigations.navigate("AccountSettings",{Account: Account})}/>
      </View>
    );
  }
}

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  elderContainer:{ justifyContent: 'flex-start'},
 
});
