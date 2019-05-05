import React from 'react'
import {StyleSheet,View,Text, Image} from 'react-native'

const ImageHeader = ({txt,image}) => {
  return(
    <View style={styles.container}>
    
    <Image style={{width: 50, height: 50}} source={{uri: image}}/>
    <Text style={{marginTop: 15, fontSize:22, justifyContent:'flex-start', flex:0.75}}>{txt}</Text>
   </View>
    )
}
export default ImageHeader

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  }

})