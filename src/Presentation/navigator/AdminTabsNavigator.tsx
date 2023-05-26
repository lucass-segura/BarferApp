import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { Contact } from '../views/Contact/Contact';
import { Products } from '../views/Products/Products';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';


const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Products"
       component={AdminCategoryListScreen}
       options={{
        title: 'Productos',
       }}
       />

      <Tab.Screen name="Contact" component={AdminOrderListScreen} />

      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
    </Tab.Navigator>
  );
}