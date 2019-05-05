import React from 'react'
import {StyleSheet, Text, TouchableOpacity,View} from 'react-native'

const customBtn = ({btnText,passedData,customStyle, customTxtStyle}) => {
  return(
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.touchBtn,customStyle]} onPress={passedData}><Text style={[{fontSize:22},customTxtStyle]}> {btnText}</Text></TouchableOpacity>
  </View>
  )
}
export default customBtn

const styles = StyleSheet.create({
  touchBtn:{
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 15,
    alignItems:'center',
    width: '80%'
  },
  btnContainer:{alignItems: 'center'}
});