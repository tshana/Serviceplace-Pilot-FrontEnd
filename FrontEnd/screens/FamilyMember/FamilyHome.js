import React, {Component} from 'react'
import {Text, View} from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import globalStyle from '../../stylings'

class FamilyMemberHome extends Component{
  memberFetch(account){
    var array = ""
    for(var i = 0; i < account.FamilyMembers.length; i++){
      array += account.FamilyMembers[i].MemberName + ","
    }
    var k = array.split(',')
    return(
      <Button btnText={k[0]} passedData={()=>navigations.navigate("#")}/>
    )
  }
  renderElders(account){
    // Where list will be rendered for every family member associated.
    return(
    <View style={{width:'100%'}}>
    {this.memberFetch(account)}
      <Button btnText='Example 1' passedData={console.log('hi')}/>
      {/* Pass in Elder button with onPress =(Elder Details Page with ElderID) */}
    </View>)
  }
  render(){
    const navigations  = this.props.navigation
    const Account = navigations.getParam('Account')
    // alert(Account.FamilyMembers[1].MemberName)
    return(
      <View style={[globalStyle.container,{ justifyContent:'flex-start'}]}>
        <Header userName={Account.FirstName}/>
        <Text style={{textAlign:'center'}}>User Type: Family Member</Text>
        {this.renderElders(Account)}

        <Button btnText='Account Settings' passedData={()=> navigations.navigate("AccountSettings", {Account: Account})}/>
      </View>
    ); 
  }
}

export default FamilyMemberHome;