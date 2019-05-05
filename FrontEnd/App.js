import React,{Component} from 'react'; import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

// Imports Each Screen and Places them into a Navigation Container
import Login                from './screens/Login/LoginScreen'
import Registration         from './screens/Login/RegistrationScreen'
import ForgotPassword       from './screens/Login/ForgottenPassword'
import MultiTypeScreen      from './screens/Login/MultiTypeScreen'

import AdminHome            from './screens/Administrator/AdminHomeScreen'

import ManagerHome          from './screens/Manager/ManagerHomeScreen'

import EmployeeHome         from './screens/Employee/EmployeeHomeScreen'
import EmployeeList         from './screens/Employee/EmployeeListScreen'
import EmployeeDetails      from './screens/Employee/EmployeeDetailsScreen'

import ElderList            from './screens/Elder/ElderListScreen'
import ElderDetails         from './screens/Elder/ElderDetailsScreen'
import ElderHome            from './screens/Elder/ElderHomeScreen'
 
import FamilyMemberHome     from './screens/FamilyMember/FamilyHome'

import NewRequestScreen     from './screens/Request/NewRequestScreen'
import RequestDetailsScreen from './screens/Request/RequestDetails'
import HistoryScreen        from './screens/Request/HistoryScreen'
import RequestLog           from './screens/Request/RequestLogScreen'

import AccountSettings      from  './screens/AccountSettings/AccountSettings'
import PasswordScreen       from  './screens/AccountSettings/PasswordSettingsScreen'
import CareHomeListScreen   from './screens/CareHomes/CarehomeListScreen'
import CareHomeDetailScreen from './screens/CareHomes/CarehomeDetailsScreen'

import AddNewUser           from './screens/Administrator/AddNewUser'
import Home                 from './screens/Home'
import AuthLoading          from './screens/AuthLoading'

const LoginNavigator = createStackNavigator({
  LoginScreen:          Login,
  RegistrationScreen:   Registration,
  ForgotPasswordScreen: ForgotPassword,
},{navigationOptions: {header: null}, initialRouteName:'LoginScreen'})
const AppNavigator = createStackNavigator({ 

  MultiHome: Home,
  MultiAccountsScreen:  MultiTypeScreen,
  AdminHomeScreen:      AdminHome,

  ManagerHomeScreen:    ManagerHome,
  
  EmployeeHomeScreen:   EmployeeHome,
  EmployeeListScreen:   EmployeeList,
  EmployeeDetailScreen: EmployeeDetails,

  FamilyMemHomeScreen:  FamilyMemberHome,

  ElderHomeScreen:      ElderHome,
  NewRequestS:          NewRequestScreen,
  RequestDetails:       RequestDetailsScreen,
  ElderListScreen:      ElderList,
  ElderDetailS:         ElderDetails,

  RequestHistoryScreen: HistoryScreen,
  RequestLogScreen:     RequestLog,

  AccountSettings:      AccountSettings,
  PasswordSettings:     PasswordScreen,

  CareHomeDetails:      CareHomeDetailScreen,
  CareHomeList:         CareHomeListScreen,

  AddNewUserScreen:    AddNewUser


},{navigationOptions: {header: null}, initialRouteName: 'MultiHome'})
const SwitchNav = createSwitchNavigator({
  Auth: AuthLoading,
  Login: LoginNavigator,
  App: AppNavigator

},{navigationOptions: {header:null}, initialRouteName:'Auth'})

export default class App extends Component { render(){ return( <SwitchNav/> ); } }