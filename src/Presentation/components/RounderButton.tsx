import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props{
    text : string,
    onPress: ()=> void
}

export const RounderButton = ({text, onPress} : Props) => {
  return (
    <TouchableOpacity style={styles.rounderButton}
    onPress={() => onPress()}>

<Text style={styles.txtButton}>{text   }</Text>

    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    rounderButton:{
        width:'100%',
        height:40,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    txtButton:{
        color:'white',
        fontWeight:'bold'
    }
});