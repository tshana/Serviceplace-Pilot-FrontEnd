import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';

var Requests = require('../../Database/Requests.json');

class NewRequestScreen extends Component {
  constructor(props){
    super(props);
    this.state = { text: 'Enter Here' };
  }

  renderHistoryCircle(item){
    circleColor = ''
    circleBorderColor = ''

    if (item.type == 'green') {circleColor = 'green'}
    else if (item.type == 'yellow'){circleColor = 'yellow'}
    else if (item.type == 'red'){circleColor = 'red'}

    if (item['complete'] == 'yes'){circleBorderColor = 'black'}
    else if (item['complete'] == 'no'){circleBorderColor = 'orange'}
    
    return <View style = {[styles.historyCircle,{backgroundColor:circleColor,borderColor:circleBorderColor}]}></View>
  }
  render(){
    return(
    <View style = {{flex: 1}}>
      <View style={[styles.bannerBackground,{borderBottomWidth:3}]}><Text style={styles.bannerText}>History</Text></View>
      
      <ScrollView> 
        { Requests.map((item, key) => (
          <View key = {key}>
            <View style={styles.requestWrap}>
              {this.renderHistoryCircle(item)}
              <TouchableOpacity style={{flex:1}} onPress={()=>this.props.navigation.navigate('RequestDetails',{requestObj: item})}>
              <Text style = {styles.historyItemText}>{item['message']}</Text>
              </TouchableOpacity>
            </View>
          </View>
          ))}
      </ScrollView>
      <View style={[styles.bannerBackground,{borderTopWidth:3}]}><Text style={styles.bannerText}></Text></View>
    </View>
    );
  }
}

export default NewRequestScreen

const styles = StyleSheet.create({
  bannerBackground:{ alignItems: 'center', backgroundColor: 'rgb(244,164,96)' },
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
    flex: 1,
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
  requestWrap:{
    flex: 1, flexDirection: 'row'
  }

  });
