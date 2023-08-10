// Drawer Paketi için Gerekli Paket
import 'react-native-gesture-handler';

// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// React Navigation Paketleri
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

// Oluşturulan Ekranlar
import MainScreen from "./screens/MainScreen";
import NewsDetailsScreen from './screens/NewsDetailsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='MainScreen' component={MainScreen}/>
    </Drawer.Navigator>
  );
}

function App() {
  return(
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen 
        name="DrawerMainScreen" 
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="NewsDetailsScreen" 
        component={NewsDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;