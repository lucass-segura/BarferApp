import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { RounderButton } from '../../components/RounderButton';
import { RootStackParamList } from '../../../../App';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};


export const HomeScreen = ({navigation, route} : Props) => {

  const { email, password, errorMessage, onChange, login, user } = useViewModel();


  useEffect(() => {
    if (errorMessage !== '') {
      Alert.alert(errorMessage);
    }
  }, [errorMessage])



  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ClientTabsNavigator');
    }
  }, [user])


  return (
    <View style={styles.container}>
      <Image style={styles.imageBackgroud} source={require('../../../../assets/perro_gato.png')} />


      <View style={styles.logoContainer}>

        <Image style={styles.logoImagen} source={require('../../../../assets/LogoAzul.png')} />
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>INGRESE</Text>

        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electronico'
          keyboard='email-address'
          secureTextEntry={false}
          property='email'
          onChangeText={onChange}
          value={email}
        />


        <CustomTextInput
          image={require('../../../../assets/block.png')}
          placeholder='password'
          keyboard='default'
          secureTextEntry={true}
          property='password'
          onChangeText={onChange}
          value={password}
        />


        <View style={{ marginTop: 30 }}>
          <RounderButton
            text='ingresar'
            onPress={() => {
              navigation.navigate('ClientTabsNavigator');
              //login()
            }}
          />
        </View>

        <View style={styles.formRegistro}>

          <Text>No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.txtRegistro}>Registrate</Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackgroud: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    resizeMode: 'cover'
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,

  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%'
  },
  logoImagen: {

  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    marginLeft: 10,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
  formRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  txtRegistro: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 6,
  }
});

