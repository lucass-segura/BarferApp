import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { ClientTabsNavigator } from './src/Presentation/navigator/ClientTabsNavigator';
export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  AdminTabsNavigator: undefined,
  ClientTabsNavigator: undefined,
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: true, title: "Registro" }}
        />

        <Stack.Screen
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="ClientTabsNavigator"
          component={ClientTabsNavigator}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
