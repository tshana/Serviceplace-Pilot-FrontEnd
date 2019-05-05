import React, { Component } from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { List, ListItem } from "react-native-elements"
import DeviceInfo from 'react-native-device-info'



var Employee = require('../../Database/Employees.json')

function RenderLists(item, navigation){
// Deconstructs item object
  const {EmployeeID, FirstName, LastName, Age, CareHome} = item
  return(
    <ListItem key={EmployeeID} title={`Name: ${FirstName} ${LastName}`} subtitle={`Age: ${Age} | Care Home: ${CareHome}`}
      onPress={() => navigation.navigate('EmployeeDetailScreen',{item:item})}/>
  );
}
// Buttons that Only Appear if Device is a tablet
function RenderTabletButtons(navigation){
  if(DeviceInfo.isTablet()){
    return(
      <View style={styles.center}>
        <TouchableOpacity style={[styles.tabletBtn,{width:'35%', flex:0}]} onPress={()=>navigation.navigate("AddNewUserScreen")}>
          <Text>Add New Employee</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// function SortByFirst(){
//   var datas = Employee 
//   // Sorts By last Name
//   datas.sort(function(a,b){
//     if(a.LastName < b.LastName) {return -1}
//     if(a.LastName > b.LastName) {return  1}
//     return 0
//   })
//   return(  alert(datas[0].LastName))

// }


class EmployeeListScreen extends Component{
  constructor(props){
    super(props)
    this.state = { dataLocal: Employee }
  }
  sortLast(){

    var sorted = this.state.dataLocal.sort(function(a,b){
      if(a.LastName < b.LastName) {return -1}
      if(a.LastName > b.LastName) {return  1}
      return 0
    })

    this.setState({dataLocal: sorted})
    alert("Changed to Last")
    this.props.navigation.navigate('AdminHomeScreen')
  }
  sortFirst(){
    var sorted = this.state.dataLocal.sort(function(a,b){
      if(a.FirstName < b.FirstName) {return -1}
      if(a.FirstName > b.FirstName) {return  1}
      return 0
    })
    this.setState({dataLocal: sorted})
    this.props.navigation.navigate('AdminHomeScreen')
  }
  render(){
    return(
      <View>
        <View style={{flexDirection:'row'}}>
          <Text style={{paddingTop:25, marginLeft: 10}}>Sort By:</Text>
          <TouchableOpacity style={styles.tabletBtn} onPress={()=>this.sortFirst()}><Text>First</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabletBtn} onPress={()=>this.sortLast()}><Text>Last</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabletBtn} onPress={()=>"Sorting Unavailable"}><Text>Job Title</Text></TouchableOpacity>        
        </View>
        
        <List>
          <FlatList data = {this.state.dataLocal} renderItem = { ({ item }) => (RenderLists(item,this.props.navigation))} keyExtractor ={(item, index)=>index.toString()}/>
        </List> 
        {RenderTabletButtons(this.props.navigation)}

      </View>

    );
  }
}
export default EmployeeListScreen;

const styles = StyleSheet.create({
  tabletBtn:{
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
    width: 0,
    flex:1
  },
  center:{ alignItems: 'center' },
});