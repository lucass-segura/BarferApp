import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
export type RootStackParamList = {  
  HomeScreen: undefined,
  RegisterScreen: undefined,
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false 
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="RegisterScreen" 
        component={RegisterScreen} 
        options={{headerShown : true, title:"Registro"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;








// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput,Alert } from 'react-native';
// import { RounderButton } from './src/components/RounderButton';
// import { RegisterScreen } from './src/views/register/Register';

// export default function App() {
//   return (
// <View style={styles.container}>
//     <Image  style={styles.imageBackgroud} source={require('./assets/perro_gato.png')}/>


//    <View style={styles.logoContainer}>

//    <Image style={styles.logoImagen} source={require('./assets/LogoAzul.png')} />
//    </View>

//     <View style={styles.form}>
//    <Text style={styles.formText}>INGRESE</Text>

//    <View style={styles.formInput}>
//      <Image style={styles.formIcon} source={require('./assets/user.png')} />
//      <TextInput style={styles.textInput} keyboardType='email-address' placeholder='Correo electronico'></TextInput>
//    </View>

//    <View style={styles.formInput}>
//      <Image style={styles.formIcon} source={require('./assets/block.png')} />
//      <TextInput style={styles.textInput} keyboardType='default' secureTextEntry={true} placeholder='password'></TextInput>
//    </View>

//       <View style={{marginTop:30}}>
//        <RounderButton
//        text= 'ingresar'
//        onPress={() =>Alert.alert("Me dieron click") }
//        />
//       </View>

// <View style={styles.formRegistro}>

//    <Text>No tienes cuenta?</Text>
//    <Text style={styles.txtRegistro}>Registrate</Text>

// </View>


//     </View>
//    </View>
//  );
// }

// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  imageBackgroud:{
//    width:'100%',
//    height:'100%',
//    opacity:0.7,
//    resizeMode:'cover'
//  },
//  form:{
//    width:'100%',
//    height:'40%',
//    backgroundColor:'white',
//    position:"absolute",
//    bottom:0,
//    borderTopLeftRadius:40,
//    borderTopRightRadius:40,
//    padding:30,

//  },
//  logoContainer:{
//    position:'absolute',
//    alignSelf:'center',
//    top:'5%'
//  },
//  logoImagen:{

//  },
//  formText:{
//    fontWeight:'bold',
//    fontSize:16,
//  },
//  textInput:{
//    flex:1,
//    borderBottomWidth:1,
//    borderBottomColor:'#EBEBEB',
//    marginLeft:10,
//  },
//  formInput:{
//    flexDirection:"row",
//    marginTop:30,
//  },
//  formIcon:{
//    width:35,
//    height:35,
//    marginTop:5,
//  },
//  formRegistro:{
//    flexDirection:'row', 
//    justifyContent:'center',
//    marginTop:30,
//  },
//  txtRegistro:{
//    fontStyle:'italic',
//    color:'orange',
//    borderBottomWidth:1,
//    borderBottomColor:'orange',
//    fontWeight:'bold',
//    marginLeft:6,
//  }
// });
