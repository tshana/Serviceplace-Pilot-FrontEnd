import React,{Component} from 'react'
import {StyleSheet, View, TouchableOpacity,ScrollView, Text, TextInput} from 'react-native'

// Replace with API Fetch equivalent 
var Requests = require('../../Database/Requests.json')


function WriteNewRequest(RequestType,RequestMessage,RequestComplete){
  Requests.unshift({
    type:RequestType,
    message:RequestMessage,
    complete: RequestComplete
  })
}

class NewRequestScreen extends Component{
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  renderHistory(item){
    circleColor = ''
    circleBorderColor = ''
// Indicates the priority of request being made.
    if (item.type == 'green'){circleColor = 'green'}
    else if (item.type == 'yellow'){circleColor = 'yellow'}
    else if (item.type == 'red'){circleColor = 'red'}
// Border Color to indicate Status of Request
    if (item['complete'] == 'yes'){circleBorderColor = 'black'}
    else if (item['complete'] == 'no'){circleBorderColor = 'orange'}
    
    return <View style = {[styles.historyCircle,{backgroundColor:circleColor,borderColor:circleBorderColor}]}></View>
    }

  render() {    
    const getParam = this.props.navigation.getParam
    const requestType = getParam('requestType')
    const userID = getParam('userID') //Uses the userID from the beginning to fetch the users specific requests

    return(
    <View style = {{flex: 1}}>
      <View style={[styles.bannerBackground,{borderBottomWidth:3}]}><Text style={styles.bannerText}>New Request</Text></View>
{/* List of User's Previous Requests */}
      <ScrollView>
        {Requests.map((item, key) =>(
          <View key = {key}>
            <View style={styles.requestWrap}>
              {this.renderHistory(item)}
              {/* Create a link to the Details page of request OR creaet an alert box asking the user if they want to resend the request. */}
              <TouchableOpacity style={{flex:1}} onPress={()=>this.props.navigation.navigate('RequestDetails',{requestObj: item})}>
                <Text style = {styles.historyItemText}>{item['message']}</Text>
              </TouchableOpacity>
            </View>
          </View>
          ))}
        </ScrollView>
{/* Request Footer */}
      <View style={{alignItems:'center', borderTopWidth:3,backgroundColor: 'rgb(244,164,96)'}}>
        <View style = {[styles.requestCircle,{backgroundColor:requestType,borderColor:'white'}]}></View>
        <TextInput style={{borderColor: 'rgb(128,0,0)', borderWidth: 2, backgroundColor: 'white', width:'100%'}} 
          placeholder = "Enter Request Here" onChangeText={(text) => this.setState({text})} value={this.state.text}/>
      </View>

      <View style={styles.bannerBackground}>
        <TouchableOpacity style={styles.confirmButton} onPress={()=>{ WriteNewRequest(requestType,this.state.text,'no')
          this.props.navigation.navigate('ElderHomeScreen')}}>
          <Text style={styles.backButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </View>
    );
  }
}

export default NewRequestScreen;

const styles = StyleSheet.create({
  bannerBackground:{
    alignItems: 'center',
    backgroundColor: 'rgb(244,164,96)'
  },
  bannerText:{
    fontSize: 20,
    color: 'rgb(128,0,0)',
    fontWeight: 'bold'
  },
  

  historyItemText:{
    fontSize: 20,
    color:'black',
    padding: 5,
    backgroundColor:'white',
    // flex: 1,
    margin: 3,
    borderColor: 'black',
    borderWidth: 3
  },
  historyCircle:{
    borderRadius:100,
    borderWidth:3,
    height: 35,
    width: 35,
    marginTop: 7,
    marginLeft: 3
  },
  requestCircle:{
    borderRadius:100,
    borderWidth:3,
    height: 25,
    width: 25,
    marginTop: 7,
    marginBottom: 7
  },
  confirmButton:{
    backgroundColor: 'green',
    borderColor:'black',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent:'center',
    width: '55%',
    height: 50,
    margin: 5
  },
  requestWrap:{ flex: 1, flexDirection: 'row'},
  backButtonText:{ fontSize: 15, color: 'white', alignItems: 'center'}
  });
