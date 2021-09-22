import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView  } from 'react-native';
import bg from './assets/loginBG.jpg';
import mbg from './assets/mainBG.jpg';
import kat from './assets/lgCat.gif';
import lgG from './assets/loginWhite.png';
import env from './assets/envelope.png';
import hand from './assets/hand.png';
import hrt from './assets/heart.png';
import pro from './assets/profile.png';
import fh from './assets/rCat.gif';
import josh from './assets/josh.jpg';
import joy from './assets/Joy.jpg';
import emma from './assets/emma.jpg';
import monj from './assets/monj.jpg';
import xki from './assets/xki.png';
import crown from './assets/crown.png';
import AppLoading from 'expo-app-loading';
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';
import Textarea from 'react-native-textarea';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';


const { AsyncStorage } = require('react-native');
const Parse = require('parse/react-native');

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'myXPrG7VqWULiyGVENWp5oe197JPFkTOZRT0IjEh', // This is your Application ID
  'dVgMTugDLRSsmEFrJjQWitYOrZiuJxjSNLpBVwGg' // This is your Javascript key
);

// Login screen
function Login({ navigation }) {

  
  const [uname, setUname] = useState("")
  const [password, setPassword] = useState("")
  const [rekt, setRekt] = useState("")

 
   
  function LogAction() {
// Pass the username and password to logIn function
Parse.User.logIn(uname, password).then((user) => {
  // Do stuff after successful login
  setRekt('coco')
  navigation.navigate('Main')
  if (typeof document !== 'undefined') document.write(`Logged in user: ${JSON.stringify(user)}`);
  console.log('Logged in user', user);
}).catch(error => {
  if (typeof document !== 'undefined') document.write(`Error while logging in user: ${JSON.stringify(error)}`);
  console.error('Error while logging in user', error);
})
  }
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  


return(
<ImageBackground source={bg} style={styles.container}>
 <StatusBar style="dark" />
 <View style={styles.circle}>
 <Image source={kat} style={{ width: 120, height: 120}} />
 </View>
 <View style={styles.card}>
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Username</Text>
 <TextInput 
 keyboardType = 'default'
 defaultValue={uname} 
 onChangeText={uname => setUname(uname)}
  placeholder="e.g. Mandela7" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Password</Text>
 <TextInput 
 secureTextEntry={true}
 defaultValue={password} 
 onChangeText={password => setPassword(password)}
 placeholder="........" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", fontSize: 30, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 <Text style={{fontSize : 16, textAlign: "right", fontFamily: "ArchitectsDaughter_400Regular", marginBottom: 15}}>reset password</Text>
 
 <TouchableOpacity>
 <Text onPress={() => navigation.navigate('Register')} style={{fontSize : 16, textAlign: "right", fontFamily: "ArchitectsDaughter_400Regular"}}>register a new account</Text>
 </TouchableOpacity>
 </View>
 <TouchableOpacity style={styles.circleG} onPress={LogAction}>
 <Image source={lgG} style={{ width: 50, height: 50}} />
 </TouchableOpacity>
</ImageBackground>
  )
}


function Favourites ({ navigation }){

  return(
    <ImageBackground source={mbg} style={styles.containerS}>
   <StatusBar style="dark" />
   <View style={styles.HeaderH}>
   <Text style={{fontSize : 22, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Agbomeikhe</Text>
   </View>
   <View style={{position : 'absolute', top : 80, flexDirection : 'row-reverse', width : "100%", alignItems : 'center'}}>
   <TouchableOpacity style={styles.circleH}>
   <Image source={josh} style={{ borderRadius : 300, width : 60, height: 60}} />
   </TouchableOpacity>
   <TouchableOpacity style={{margin : 5, elevation : 6, backgroundColor : "#fff", height : 60, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
   <Image source={hand} style={{ width: 50, height: 50}} />
   </TouchableOpacity>
   <TouchableOpacity style={{elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
   <Image source={env} style={{ width: 30, height: 30}} />
   </TouchableOpacity>
   <TouchableOpacity style={{marginRight : 5, elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
   <Image source={hrt} style={{ width: 30, height: 30}} />
   </TouchableOpacity>
   </View>
  
   <View style={{ marginTop: 40, width : "100%", backgroundColor : "#fff", elevation : 5, padding : 15, alignItems : 'center'} }>
   <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Coming soon</Text>
  
   </View>
   </ImageBackground>
  )
}

function Give ({ navigation }){

  return(
    <ImageBackground source={mbg} style={styles.containerS}>
   <StatusBar style="dark" />

   <View style={{ marginTop: 40, width : "100%", backgroundColor : "#fff", elevation : 5, padding : 15} }>
   <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>For now, All of it...</Text>
   <View style={{ flexDirection : "row", backgroundColor : "#fff", padding : 15, justifyContent : 'space-around'} }>
   <TouchableOpacity style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={fh} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>XCA</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{ borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={kat} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>GHz</Text>
   </TouchableOpacity>
   </View>
   <View style={{ flexDirection : "row", backgroundColor : "#fff", padding : 15, justifyContent : 'space-around'} }>
   <TouchableOpacity style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={fh} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>XCA</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{ borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={kat} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>GHz</Text>
   </TouchableOpacity>
   </View>
   <View style={{ flexDirection : "row", backgroundColor : "#fff", padding : 15, justifyContent : 'space-around'} }>
   <TouchableOpacity style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={fh} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>XCA</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{ borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
   <Image source={kat} style={{ width: 90, height: 90}} />
   <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>GHz</Text>
   </TouchableOpacity>
   </View>
   </View>
   </ImageBackground>
  )
}
function Message ({ navigation }){
  var data = ["C", "Java", "JavaScript", "PHP"]
  return(
    <SafeAreaProvider>
      <ImageBackground source={mbg} style={styles.containerS}>
     <StatusBar style="dark" />
     <View style={styles.HeaderH}>
     <Text style={{fontSize : 22, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Agbomeikhe</Text>
     </View>
     <View style={{position : 'absolute', top : 80, flexDirection : 'row-reverse', width : "100%", alignItems : 'center'}}>
     <TouchableOpacity style={styles.circleH}>
     <Image source={josh} style={{ borderRadius : 300, width : 60, height: 60}} />
     </TouchableOpacity>
     <TouchableOpacity style={{margin : 5, elevation : 6, backgroundColor : "#fff", height : 60, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
     <Image source={hand} style={{ width: 50, height: 50}} />
     </TouchableOpacity>
     <TouchableOpacity style={{elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
     <Image source={env} style={{ width: 30, height: 30}} />
     </TouchableOpacity>
     <TouchableOpacity style={{marginRight : 5, elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
     <Image source={hrt} style={{ width: 30, height: 30}} />
     </TouchableOpacity>
     </View>
    
     <View style={{ marginTop: 40, width : "100%", backgroundColor : "#fff", elevation : 5, padding : 15, alignItems : 'center'} }>
     <Text style={{borderColor : '#d3d3d3', borderBottomWidth : 1, paddingBottom : 10, marginBottom : 10, fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Yay!, send us a message, We typically reply within 24 hours.</Text>
     <Textarea containerStyle={styles.textareaContainer}
    style={styles.textarea}
    maxLength={255}
    placeholder={'Enter your message here...'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}/>
     
    <TouchableOpacity style={styles.circleM}>
 <Image source={env} style={{ width: 30, height: 30}} />
 </TouchableOpacity>
 
 </View>
     </ImageBackground>
     </SafeAreaProvider>
    )
}
// Register Screen here
function Register({ navigation }) {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")

  function RegAction() {

    console.log(fname)
    console.log(lname)
    console.log(email)
    console.log(password)
    console.log(number)

    const user = new Parse.User()
user.set('username', fname);
user.set('email', email);
user.set('password', password);

user.signUp().then((user) => {
  if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
  console.log('User signed up', user);
}).catch(error => {
  if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
  console.error('Error while signing up user', error);
});

    }
    

  return (
<ImageBackground source={bg} style={styles.containerS}>
 <ScrollView style={{ width: "100%"}}>
 <View style={styles.container}>
 <StatusBar style="dark" />
 <View style={styles.circleS}>
 <Image source={kat} style={{ width: 120, height: 120}} />
 </View>
 <View style={styles.card}>
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>E-mail</Text>
 <TextInput 
 keyboardType = 'email-address'
 defaultValue={email} 
 onChangeText={email => setEmail(email)}
 placeholder="example@xekhai.com.ng" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Password</Text>
 <TextInput 
 secureTextEntry={true}
 defaultValue={password} 
 onChangeText={password => setPassword(password)}
 placeholder="........" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", fontSize: 30, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Username</Text>
 <TextInput  
 keyboardType = 'default'
 defaultValue={fname} 
 onChangeText={fname => setFname(fname)}
 placeholder="e.g. Joshua" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
  
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Full Name (Surname first) </Text>
 <TextInput
 keyboardType = 'default'
 defaultValue={lname} 
 onChangeText={lname => setLname(lname)}
 placeholder="e.g. Agbomeikhe Joshua Praise" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 <Text style={{fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Phone Number</Text>
 <TextInput 
 defaultValue={number} 
 onChangeText={number => setNumber(number)}
 keyboardType = 'number-pad'
 placeholder="+234 802 123 4567" 
 style={{ fontFamily: "ArchitectsDaughter_400Regular", height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom : 15 }}/>
 
 <Text onPress={() => navigation.navigate('Home')} style={{fontSize : 16, textAlign: "right", fontFamily: "ArchitectsDaughter_400Regular"}}>already have an account?, login instead.</Text>

 </View>
 <TouchableOpacity style={styles.circleG} onPress={RegAction}>
 <Image source={lgG} style={{ width: 50, height: 50}} />
 </TouchableOpacity>
 </View>
 </ScrollView>
</ImageBackground>
  );
}
//Home Page
function Home({ navigation }) {
  return(
<ImageBackground source={mbg} style={styles.containerS}>
 <StatusBar style="dark" />
 <View style={styles.HeaderH}>
 <Text style={{fontSize : 22, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Agbomeikhe</Text>
 </View>
 <View style={{position : 'absolute', top : 80, flexDirection : 'row-reverse', width : "100%", alignItems : 'center'}}>
 <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.circleH} >
 <Image source={josh} style={{ borderRadius : 300, width : 60, height: 60}} />
 </TouchableOpacity>
 <TouchableOpacity onPress={() => navigation.navigate('Give')} style={{margin : 5, elevation : 6, backgroundColor : "#fff", height : 60, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
 <Image source={hand} style={{ width: 50, height: 50}} />
 </TouchableOpacity>
 <TouchableOpacity onPress={() => navigation.navigate('Message')} style={{elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
 <Image source={env} style={{ width: 30, height: 30}} />
 </TouchableOpacity>
 <TouchableOpacity onPress={() => navigation.navigate('favs')} style={{marginRight : 5, elevation : 6, backgroundColor : "#fff", height : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
 <Image source={hrt} style={{ width: 30, height: 30}} />
 </TouchableOpacity>
 </View>

 <View style={{ marginTop: 40, width : "100%", backgroundColor : "#fff", elevation : 5, paddingBottom : 5}} >
 <Text style={{ marginLeft : 5, marginVertical : 7, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Featured Organisations</Text>
 <View style={{flexDirection : 'row'}}>
 
 <ScrollView horizontal={true}>
 <TouchableOpacity onPress={() => navigation.navigate('Organisation')} style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={fh} style={{ width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>XCA</Text>
 </TouchableOpacity>
 <View style={{ borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={kat} style={{ width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>GHz</Text>
 </View>
 <View style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={mbg} style={{borderRadius : 7.5, width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>FB</Text>
 </View>
 <View style={{ borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={pro} style={{ width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>TWA</Text>
 </View>
 </ScrollView>

 </View>
 </View>
 <View style={{ flex : 1, width: "100%", backgroundColor : "#fff", elevation : 6}} >
 <Text style={{marginLeft : 5, marginVertical : 15, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Trendsetters</Text>
 <TouchableOpacity style={{marginLeft : 5, elevation : 6, backgroundColor : "#fff", width : 40, borderRadius : 300, justifyContent  : 'center', padding  : 5}}>
 <Image source={crown} style={{ width: 30, height: 30}} />
 </TouchableOpacity>
 <View style={{flexDirection : 'row'}}>
 
 <ScrollView horizontal={true}>
 <View style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={josh} style={{ borderRadius : 7.5, width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua</Text>
 </View>
 <View style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={emma} style={{ borderRadius : 7.5, width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Emmanuel</Text>
 </View>
 <View style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={joy} style={{borderRadius : 7.5, width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joy</Text>
 </View>
 <View style={{ padding : 5, borderRadius : 7.5, width: 100, margin: 5, marginBottom: 15, elevation : 6, backgroundColor : "#fff", alignItems : 'center'}} >
 <Image source={monj} style={{ borderRadius : 7.5, width: 90, height: 90}} />
 <Text style={{ marginVertical : 5, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Monjola</Text>
 </View>
 </ScrollView>

 </View>

 
 </View>
</ImageBackground>
  )

}

function Profile({ navigation }){ 
  return(
    <SafeAreaProvider>
      <ImageBackground source={mbg} style={styles.containerS}>
 <StatusBar style="dark" />
 <View style={styles.HeaderP}>
 <TouchableOpacity style={styles.circleH} >
 <Image source={josh} style={{ borderRadius : 300, width : 100, height: 100}} />
 </TouchableOpacity>
 
 <Text style={{borderColor : '#d3d3d3', borderLeftWidth : 1, paddingLeft : 10, marginLeft : 10, fontSize : 22, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Agbomeikhe</Text>
 </View>
 <View style={{ marginTop: 40, width : "100%", backgroundColor : "#fff", elevation : 5, padding : 15, alignItems : 'center'} }>
 <Text style={{borderColor : '#d3d3d3', borderBottomWidth : 1, paddingBottom : 10, marginBottom : 10, fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Change profile picture</Text>
 <Text style={{borderColor : '#d3d3d3', borderBottomWidth : 1, paddingBottom : 10, marginBottom : 10, fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>Log out</Text>
 <Text style={{paddingBottom : 10, marginTop : 40, fontSize : 12, fontFamily: "ArchitectsDaughter_400Regular"}}>Alpha 0.0.1</Text>

</View>

</ImageBackground>
      </SafeAreaProvider>

  )
 }


 function Organisation({ navigation }){ 
  return(
    <SafeAreaProvider>
      <ImageBackground source={mbg} style={styles.containerS}>
 <StatusBar style="dark" />
 <View style={styles.HeaderO}>
 <Text style={{ fontSize : 22, fontFamily: "ArchitectsDaughter_400Regular"}}>Xekhai Creative Agency</Text>
 </View>

 <ScrollView style={{ elevation : 5, width : "100%"} }>
 <View style={{ marginTop: 70, width : "100%", elevation : 5, padding : 0, alignItems : 'center'} }>
 <TouchableOpacity style={styles.circleH} >
 <Image source={xki} style={{ borderRadius : 300, width : 100, height: 100}} />
 </TouchableOpacity>
 <View style={{ marginTop: 15, width : "100%", backgroundColor : "#fff", elevation : 5, padding : 15, alignItems : 'center'} }>
 <Progress.Bar progress={0.16} width={250} color={'#000'} animated={true}/>
 <Text style={{borderColor : '#d3d3d3', borderBottomWidth : 1, paddingBottom : 10, margin : 10, fontSize : 18, fontFamily: "ArchitectsDaughter_400Regular"}}>₦704,800 of ₦4,500,000</Text>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={xki} style={{width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Anonymous gave ₦4,800 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>
 <View style={{borderBottomWidth : 1, width : '35%', borderColor : '#d3d3d3', margin : 10}}>
 </View>
 <View style={{flexDirection : 'row', width : '100%', alignItems : 'center'}}>
 <Image source={josh} style={{ borderRadius : 300, width : 30, height: 30}} />
 <Text style={{paddingLeft : 14, fontSize : 14, fontFamily: "ArchitectsDaughter_400Regular"}}>Joshua Praise gave ₦100,000 to this cause</Text>
 </View>



 <Text style={{paddingBottom : 10, marginTop : 40, fontSize : 12, fontFamily: "ArchitectsDaughter_400Regular"}}>Alpha 0.0.1</Text>

</View>

</View>
</ScrollView>

<TouchableOpacity style={{ borderRadius : 300, elevation : 7, position : 'absolute', bottom : 25, backgroundColor : '#fff', padding : 10}}>
 <Image source={hand} style={{width : 50, height: 50}} />
 </TouchableOpacity>
</ImageBackground>
      </SafeAreaProvider>

  )
 }
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="favs" component={Favourites} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Give" component={Give} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Organisation" component={Organisation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding : 25
  },
  containerS: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop : 50,
    paddingBottom : 50,
    margin : 10,
    borderRadius : 5,
    elevation : 5,
    width : "100%",
  },
  HeaderH: {
    backgroundColor: '#fff',
    elevation : 5,
    padding : 45,
    alignItems: 'center',
    width : "100%",
  },
  HeaderP: {
    backgroundColor: '#fff',
    elevation : 5,
    paddingVertical : 35,
    justifyContent: 'center',
    alignItems: 'center',
    width : "100%",
   flexDirection : "row",
  },
  HeaderO: {
    backgroundColor: '#fff',
    position: 'absolute',
    elevation : 5,
    paddingVertical : 35,
    justifyContent: 'center',
    alignItems: 'center',
    width : "100%",
  },
  cardS: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop : 50,
    paddingBottom : 50,
    margin : 10,
    width : "100%",
    borderRadius : 5,
    elevation : 5,
  },
  circle: {
    padding : 0,
    backgroundColor: '#000',
    borderWidth : 6,
    borderColor : "#fff",
    borderRadius : 300,
    elevation : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleH: {
    marginRight : 5,
    padding : 5,
    backgroundColor: '#fff',
    borderRadius : 300,
    elevation : 6,
  },
  circleS: {
    padding : 0,
    backgroundColor: '#fff',
    borderWidth : 6,
    borderColor : "#fff",
    borderRadius : 300,
    elevation : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleG: {
    padding : 5,
    backgroundColor: '#e69900',
    borderWidth : 6,
    borderColor : "#fff",
    borderRadius : 300,
    elevation : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleM: {

    padding : 11,
    backgroundColor: '#fff',
    marginVertical : 6,
    borderRadius : 300,
    elevation : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 10,
    elevation: 5,
    borderRadius : 5,
    margin : 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontFamily : 'ArchitectsDaughter_400Regular',
    fontSize: 14,
    color: '#333',
  },
});


export default App;