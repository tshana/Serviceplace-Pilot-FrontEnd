import React from 'react'
import {Text} from 'react-native'

const Header = (props) => {
    return(
    // Maybe add a view to contain the text
    <Text style={{fontSize:25, padding:15, textAlign:'center'}}>Welcome {props.userName}</Text>
    )
}
export default Header
