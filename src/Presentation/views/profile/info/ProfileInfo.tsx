import React from 'react'
import { View, Text,Button , Image, Pressable} from 'react-native'
import useViewModel from './ViewModel';
import { RootStackParamList } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import styles from './Styles';
import { RounderButton } from '../../../components/RounderButton';

export const ProfileInfoScreen= () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
const {removeSession} = useViewModel();

  return (
    <View style={ styles.container }>

        <Image
            source={ require('../../../../../assets/perro_gato.png') } 
            style={ styles.imageBackground }
        />
        
        <Pressable 
          style={ styles.logout }
          onPress={() => {
            //removeUserSession();
          }}>
          {/* <Image
                source={ require('../../../../../assets/logout.png') } 
                style={ styles.logoutImage }
            /> */}
        </Pressable>
        
        {/* <Pressable 
          style={ styles.change }
         </View> onPress={() => navigation.replace('RolesScreen')}>
          <Image
                source={ require('../../../../../assets/exchange.png') } 
                style={ styles.logoutImage }
            />
        </Pressable> */}
       
        <View style={ styles.logoContainer }>
            {/* { 
              user?.image !== '' 
                &&
              <Image 
                source={{ uri: user?.image }}
                style={ styles.logoImage }
              />
            } */}
            
        </View>

        <View style={ styles.form }>
            <View style={ styles.formInfo }>
              <Image
                source={ require('../../../../../assets/user.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
               {/* <Text>{ user?.name } {user?.lastname}</Text> */}
                <Text style={ styles.formTextDescription }>Nombre del usuario</Text>
              </View>
            </View>
            
            <View style={ {...styles.formInfo, marginTop: 25} }>
              <Image
                source={ require('../../../../../assets/email.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                {/* <Text>{ user?.email }</Text> */}
                <Text style={ styles.formTextDescription }>Correo electronico</Text>
              </View>
            </View>

            <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
              <Image
                source={ require('../../../../../assets/phone.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                {/* <Text>{ user?.phone }</Text> */}
                <Text style={ styles.formTextDescription }>Telefono</Text>
              </View>
            </View>

            <RounderButton
              onPress={() => navigation.navigate('HomeScreen')}
              text='ACTUALIZAR INFORMACION' />

        </View>

    </View>
  )
}
