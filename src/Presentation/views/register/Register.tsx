import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { RounderButton } from '../../components/RounderButton';
import useViewModel from './ViewModel';

export const RegisterScreen = () => {

    const { email, password, repeatPassword, phone, direction, onChange , register} = useViewModel();


    return (
        <View style={styles.container}>
            <Image style={styles.imageBackgroud} source={require('../../../../assets/perro_gato.png')} />


            <View style={styles.logoContainer}>

                <Image style={styles.logoImagen} source={require('../../../../assets/pet.png')} />
                <Text style={styles.logoText}>Selecciona una imagen de tu mascota</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>

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

                <CustomTextInput
                    image={require('../../../../assets/block.png')}
                    placeholder='Repetir password'
                    keyboard='default'
                    secureTextEntry={true}
                    property='repeatPassword'
                    onChangeText={onChange}
                    value={repeatPassword}
                />

                <CustomTextInput

                    image={require('../../../../assets/phone.png')}
                    placeholder='Telefono'
                    keyboard='phone-pad'
                    secureTextEntry={false}
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />

                <CustomTextInput

                    image={require('../../../../assets/location.png')}
                    placeholder='Localidad'
                    keyboard='default'
                    secureTextEntry={false}
                    property='direction'
                    onChangeText={onChange}
                    value={direction}
                />

                <View style={{ marginTop: 30 }}>
                    <RounderButton
                        text='ingresar'
                        onPress={() => register()}
                    />
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
        height: '74%',
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
        top: '4%',
        alignItems: 'center',
    },
    logoImagen: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
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
    },

});


