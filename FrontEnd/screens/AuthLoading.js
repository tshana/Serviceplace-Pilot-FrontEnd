import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, View} from 'react-native';

import globalStyle from '../stylings'
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our Temporary "Universal" Home
  _bootstrapAsync = async () => {
    const checkToken = await AsyncStorage.getItem('userInfo')
    const navigate = this.props.navigation.navigate

    // This will switch to the App screen or Auth screen and this loading screen will be unmounted and thrown away.
    if(checkToken){ 
      let userObj = JSON.parse(checkToken); 
      navigate("MultiHome", {Account: userObj}) 
    }
    else if(checkToken == null){navigate('Login')}
    else{ alert("Unexpected Tokem: " + checkToken)}
  };
  
  render(){ return( <View style={globalStyle.container}><ActivityIndicator/></View> ); }
}
export default AuthLoadingScreen