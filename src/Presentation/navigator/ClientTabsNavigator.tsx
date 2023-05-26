import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { ClienteCategoryListScreen } from '../views/client/category/list/CategoryList';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Products"
       component={ClienteCategoryListScreen}
       options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image  source={require('../../../assets/list.png')}
          style={{width:25, height:25}} />
        ),
       }}
       />
      <Tab.Screen name="Contact" component={ClientOrderListScreen}
             options={{
              title: 'Categorias',
              tabBarLabel: 'Contact',
              tabBarIcon: ({ color, size }) => (
                <Image  source={require('../../../assets/contact.png')}
                style={{width:25, height:25}} />
              ),
             }}
             /> 
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} 
             options={{
              title: 'My profile',
              tabBarLabel: 'My profile',
              tabBarIcon: ({ color, size }) => (
                <Image  source={require('../../../assets/profile.png')}
                style={{width:25, height:25}} />
              ),
             }}
      />
    </Tab.Navigator>
  );
}