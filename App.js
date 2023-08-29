// React Native Temel Paketler
import { Image, StatusBar } from "react-native";

// Drawer Paketi için Gerekli Paket
import 'react-native-gesture-handler';

// React Navigation Paketleri
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

// Oluşturulan Ekranlar
import MainScreen from "./screens/MainScreen";
import NewsDetailsScreen from './screens/NewsDetailsScreen';
import CitySelectionScreen from "./screens/CitySelectionScreen";

// Oluşturulan Öğeler
import IconButton from './components/IconButton';

// Statik Değerler
import AppColors from './constants/colors';
import ContextProvider from "./store/context";

// Uygulama Ayarları(API)
import PanelSettings from "./util/panelSettings";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Header barına gölge vermek için config objesi
const NavigatorHeaderStyle = {
  elevation: 10,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.20,
  shadowRadius: 6,
  backgroundColor: PanelSettings.headerAndStatusBarBG_Color,
};

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: AppColors.red200,
      drawerActiveTintColor: PanelSettings.menuTextColor,
    }}>
      <Drawer.Screen name='MainScreen' component={MainScreen} options={({ navigation }) => ({
        headerStyle: NavigatorHeaderStyle,
        headerLeft: (_) => <IconButton icon="menu" size={32} color={AppColors.gray300} onPress={navigation.toggleDrawer}/>,
        headerTitle: (_) =>
          <Image source={require("./assets/images/logo.png")} style={{
            width: 112,
            height: 30,
            resizeMode: 'stretch',
          }}/>,
        headerTitleAlign: "center",
        headerRight: (_) => <IconButton icon="search" size={32} color={AppColors.gray300}/>,
      })}/>
    </Drawer.Navigator>
  );
}

function App() {
  return(
    <ContextProvider>
      <StatusBar barStyle={PanelSettings.iosStatusBarContentColor} backgroundColor={PanelSettings.headerAndStatusBarBG_Color}/>
      <NavigationContainer>  
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: PanelSettings.headerAndStatusBarBG_Color },
        }}>
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
          <Stack.Screen 
          name="CitySelectionScreen" 
          component={CitySelectionScreen}
          options={{ 
            presentation: "modal",
            title: "Şehir Seç" 
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;