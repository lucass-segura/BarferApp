import React from 'react'
import {View, Image, TextInput, StyleSheet, KeyboardType} from 'react-native'


interface Props{
    image: any,
    placeholder: string,
    keyboard: KeyboardType,
    secureTextEntry: boolean,
    property: string,
    onChangeText: (property : string, value:any) => void,
    value: string

}


export const CustomTextInput = ({
    image,
    placeholder,
    keyboard,
    secureTextEntry,
    property,
    onChangeText,
    value,
} : Props) => {
  return (
    <View style={styles.formInput}>
    <Image style={styles.formIcon} source={image} />
    <TextInput value={value}
      onChangeText={text => onChangeText(property,text)}
      style={styles.textInput}
      keyboardType={keyboard}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      ></TextInput>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default CustomTextInput;