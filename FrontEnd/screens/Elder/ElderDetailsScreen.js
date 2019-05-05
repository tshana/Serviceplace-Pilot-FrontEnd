import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import Divider from 'react-native-divider'
import DeviceInfo from 'react-native-device-info'

function hiddenContent(){
  const status = false
  if (status == true){
    return(
    <View style={styles.hiddenC}>
      <Text>Hidden Content</Text>
    </View>
    )
  }
  else{
    return(<View></View>)
  }

}
function RenderDetails(item){
  return(
  <View>
    <View style={styles.Header}>
      <Image style={{width: 80, height: 80}} source={{uri: item.avatar_url}}/>
    </View>
    
    <Divider borderColor="black" color='black' orientation="center">
      <Text style={styles.HeaderText}>{item.FirstName} {item.LastName} </Text>
    </Divider>
    
    <View style={styles.Details}>
      <Text style={styles.DetailsText}>Age: {item.Age}</Text>
      <Text style={styles.DetailsText}>Birthday: {item.Birthday}</Text>
      <Text style={styles.DetailsText}>CareHome: {item.CareHome}</Text>
      <Text style={styles.DetailsText}>ElderID:  {item.ElderID}</Text>
    </View>

    <View style={styles.Details}>
      <TouchableOpacity style={[styles.touchBtn,{width:'50%'}]}>
        <Text>Personal Information &emsp;></Text>
      </TouchableOpacity>
      {hiddenContent()}
      <TouchableOpacity style={[styles.touchBtn,{width:'50%'}]}>
        <Text>Family Members &emsp;></Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.touchBtn,{width:'50%'}]}>
        <Text>Requests &emsp;></Text>
      </TouchableOpacity>
    </View>
    {RenderTabletButtons()}
  </View>
  );
}
// -------- TO DO: -------- 
//  Maybe create a new file that renders tablet buttons based on pageID or parameter of the page.
//  That way we don't need to create/repeat the function RenderTabletButtons() on each page.
function RenderTabletButtons(){
  if(DeviceInfo.isTablet()==true){
    return(
      <View style={styles.Details}>
        <TouchableOpacity style={[styles.AdminBtn,{width:'50%'}]}>
          <Text>Delete Elder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.AdminBtn,{width:'50%'}]}>
          <Text>Edit Elder</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ElderDetailsScreen extends Component{

  render(){
    const item = this.props.navigation.getParam('item');
    return(RenderDetails(item));
  }
}
export default ElderDetailsScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  HeaderText:{ fontSize:30},
  Header:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:10
  },
  Details:{ alignItems: 'center' },
  DetailsText:{ fontSize:20, },
  touchBtn:{
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
  },
  AdminBtn:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
  },
  hiddenC:{
    backgroundColor: '#fff'
  }
});