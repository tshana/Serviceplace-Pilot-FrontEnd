import React, { Component } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import DeviceInfo from 'react-native-device-info';

var Elders = require('../../Database/Elders.json');

function RenderLists(item, navigation){
  return(
  <ListItem
  key={item.ElderID}
  avatar={{uri: item.avatar_url}}
  title={`Name: ${item.FirstName} ${item.LastName}`}
  subtitle={`Age: ${item.Age} | Care Home: ${item.CareHome}`}
  button onPress={() => navigation.navigate('ElderDetailS',{item:item})}
  />
  );
}

function RenderTabletButtons(navigation){
  if(DeviceInfo.isTablet()){
    return(
      <View style={styles.Details}>
        <TouchableOpacity style={[styles.tabletBtn,{width:'50%'}]} onPress={()=>navigation.navigate("AddNewUserScreen")}><Text>Add New Elder</Text></TouchableOpacity>
      </View>);
  }
}

class ElderListScreen extends Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  }
  
  render(){
    return(
      <View style={styles.container}>
        <SearchBar placeholder="Enter text..." lightTheme />
  
        <List>
          <FlatList
            data = {Elders} renderItem = {({ item }) => (RenderLists(item,this.props.navigation))}
            keyExtractor ={(item, index)=>index.toString()}
          />
        </List>
        {RenderTabletButtons(this.props.navigation)}
      </View>
    );
  }
}
export default ElderListScreen

const styles = StyleSheet.create({
  tabletBtn:{
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
    width: '35%'
  },
  Details:{ alignItems: 'center'},
  container: { flex: 1},
});
