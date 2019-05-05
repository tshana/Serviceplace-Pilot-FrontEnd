import React, {Component} from 'react'
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native'

import ImageHeader from '../../components/ImageHeader'

/* PARAMETERS THAT ARE NEEDED: RequestUserName + UserImage  && Request Table of: Time and Completion of Task  */

const width = Dimensions.get('window').width
class RequestLogScreen extends Component{
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <ImageHeader txt="UserName" image="http://cdn.onlinewebfonts.com/svg/img_173956.png"/>        

          <Text style={styles.headerTxt}>Request Created:</Text>
          <Text style={styles.subTxt}>{"Initiators Name"}</Text>
          <Text style={styles.subTxt}>{"Time of Creation"}</Text>
          <Text style={styles.subTxt}>{"GPS - Coordinates of who Created Request"}</Text>

          <Text style={styles.headerTxt}>Notification Sent Out: </Text>   
          <Text style={styles.subTxt}>{"Time Sent"}</Text>
          <Text style={styles.subTxt}>{"People it was sent out to"}</Text>

          <Text style={styles.headerTxt}>Request Accepted:</Text>   
          <Text style={styles.subTxt}>{"Time of Acceptance"}</Text>
          <Text style={styles.subTxt}>{"Who Accepted"}</Text>
          <Text style={styles.subTxt}>{"GPS - Coordinates of who Accepted Request"}</Text>

          <Text style={styles.headerTxt}>Request Completed:</Text>  
          <Text style={styles.subTxt}>{"Time of Completion"}</Text>  
        </View>
      </ScrollView>
    )
  }
}

export default RequestLogScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerTxt:{
    fontSize: width * 0.04,
    marginTop: 15,
    marginLeft: '5%',
    color: 'rgb(244,164,96)'
  },
  subTxt:{
    paddingLeft: 50,
    fontSize: width*.05,
    fontFamily: 'Roboto-Light'
  },
})