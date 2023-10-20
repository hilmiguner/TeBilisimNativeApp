// React Native Temel Paketler
import { Image, ActivityIndicator, View, StatusBar, Pressable } from "react-native";

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

// Context
import { Context } from "./store/context";

// React Native Hooks
import { useContext, useEffect } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Header barına gölge vermek için config objesi
const NavigatorHeaderStyle = {
  elevation: 10,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.20,
  shadowRadius: 6,
};

function StackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerStyle: { backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color },
            headerTintColor: ctx.panelSettings.headerTextColor,
            headerStyle: {...NavigatorHeaderStyle, backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color},
            headerLeft: (_) => <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
            headerTitle: (_) => (
                <Pressable onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainScreen' }],
                    });
                }}>
                    <Image source={require("./assets/images/logo.png")} style={{
                        width: 112,
                        height: 30,
                        resizeMode: 'stretch',
                    }}/>
                </Pressable>
            ),
            })}
        >
            <Stack.Screen 
                name="MainScreen" 
                component={MainScreen}
            />
            <Stack.Screen 
                name="NewsDetailsScreen" 
                component={NewsDetailsScreen}
                options={({ navigation}) =>( {
                    headerTitle: (_) => (
                        <Pressable onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'MainScreen' }],
                            });
                        }}>
                            <Image source={require("./assets/images/logo.png")} style={{
                                width: 112,
                                height: 30,
                                resizeMode: 'stretch',
                            }}/>
                        </Pressable>
                    ),
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
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
    );
}

function MainContent() {
    const ctx = useContext(Context);
    useEffect(() => {
        if(!ctx.panelSettings) {
            ctx.getPanelSettings();
        }
    }, [ctx.panelSettings]);

    let mainContent = (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
        </View>
    );
    if(ctx.panelSettings) {
        mainContent = (
            <>
                <StatusBar barStyle={ctx.panelSettings.iosStatusBarContentColor} backgroundColor={ctx.panelSettings.mobile_app_bar_style_color}/>
                <NavigationContainer>  
                    <Drawer.Navigator screenOptions={{
                        headerShown: false,
                        drawerStyle: { backgroundColor: ctx.panelSettings.menuBG_Color },
                        drawerActiveBackgroundColor: ctx.panelSettings.themePrimaryColor,
                        // drawerActiveTintColor: ctx.panelSettings.menuTextColor,
                        drawerActiveTintColor: "white",
                        headerTintColor: ctx.panelSettings.headerTextColor,
                    }}>
                        <Drawer.Screen name='StackNavigator' component={StackNavigator}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </>
        );
      }

    return(mainContent);
}

export default MainContent;