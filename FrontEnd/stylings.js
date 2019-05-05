import {StyleSheet} from 'react-native';

export default StyleSheet.create({
container:{
 flex: 1, 
 backgroundColor: '#bdc3c7',
 justifyContent: 'center'
},
touchBtn:{
  backgroundColor: '#DDDDDD',
  padding: 10,
  borderRadius: 10,
  margin: 15,
  alignItems:'center',
},

textField:{
  backgroundColor:'rgba(255,255,255,0.7)',
  height: 40,
  textAlign: 'center',
  margin: 15,
  borderRadius: 160,
},

// Registration Screen
mail:{
  width:'80%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 15,
  paddingBottom: 15,
  flexDirection: 'row',
},
mail_icon:{ width:50, height:50, margin:10 },
// Registration Screen END

headerTxt:{
  textAlign: 'center',
  fontSize: 20,
  paddingBottom: 10
},

txtCenter:{ textAlign: 'center' }

});