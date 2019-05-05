import React from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import globalStyle from '../../stylings'

const Registration = ()=> {
  return(
    <View style={[globalStyle.container, { alignItems: 'center'}]}>
      <Text>To register, please email:</Text>
      <TouchableOpacity style={globalStyle.mail} onPress={()=> Linking.openURL('mailto:register@serviceplace.com')}>
        <Image style={globalStyle.mail_icon} source={{uri: 'https://cdn1.iconfinder.com/data/icons/free-98-icons/32/email-512.png'}}/>
        <Text>register@serviceplace.com</Text>
      </TouchableOpacity> 
    </View>
  );
} 

export default Registration;