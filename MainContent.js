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
import PhotoGalleryScreen from "./screens/PhotoGalleryScreen";
import VideoGalleryScreen from "./screens/VideoGalleryScreen";
import AuthorsScreen from "./screens/AuthorsScreen";

// Oluşturulan Öğeler
import IconButton from './components/IconButton';

// Context
import { Context } from "./store/context";

// React Native Hooks
import { useContext, useEffect } from "react";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen";
import VideoDetailsScreen from "./screens/VideoDetailsScreen";
import DailyNewsScreen from "./screens/DailyNewsScreen";
import FeaturedNewsScreen from "./screens/FeaturedNewsScreen";
import TrendNewsScreen from "./screens/TrendNewsScreen";

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
            headerBackVisible: false,
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
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen 
                name="ArticleDetailsScreen" 
                component={ArticleDetailsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen 
                name="VideoDetailsScreen" 
                component={VideoDetailsScreen}
                options={({ navigation}) =>( {
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
            <Stack.Screen 
                name="DailyNewsScreen" 
                component={DailyNewsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen 
                name="FeaturedNewsScreen" 
                component={FeaturedNewsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen 
                name="TrendNewsScreen" 
                component={TrendNewsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
}

function AuthorsStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerTintColor: ctx.panelSettings.headerTextColor,
            headerStyle: {...NavigatorHeaderStyle, backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color},
            headerLeft: (_) => <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
            headerTitle: (_) => (
                <Pressable onPress={() => {
                    mainDrawerNavigation = navigation.getParent();
                    mainDrawerNavigation.jumpTo("StackNavigator")
                }}>
                    <Image source={require("./assets/images/logo.png")} style={{
                        width: 112,
                        height: 30,
                        resizeMode: 'stretch',
                    }}/>
                </Pressable>
            ),
            headerBackVisible: false,
            })}
        >
            <Stack.Screen 
                name="AuthorsScreen" 
                component={AuthorsScreen}
            />
            <Stack.Screen 
                name="ArticleDetailsScreen" 
                component={ArticleDetailsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
}

function PhotoGalleryStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerTintColor: ctx.panelSettings.headerTextColor,
            headerStyle: {...NavigatorHeaderStyle, backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color},
            headerLeft: (_) => <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
            headerTitle: (_) => (
                <Pressable onPress={() => {
                    mainDrawerNavigation = navigation.getParent();
                    mainDrawerNavigation.jumpTo("StackNavigator")
                }}>
                    <Image source={require("./assets/images/logo.png")} style={{
                        width: 112,
                        height: 30,
                        resizeMode: 'stretch',
                    }}/>
                </Pressable>
            ),
            headerBackVisible: false,
            })}
        >
            <Stack.Screen 
                name="PhotoGalleryScreen" 
                component={PhotoGalleryScreen}
            />
            <Stack.Screen 
                name="NewsDetailsScreen" 
                component={NewsDetailsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
}

function VideoGalleryStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerTintColor: ctx.panelSettings.headerTextColor,
            headerStyle: {...NavigatorHeaderStyle, backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color},
            headerLeft: (_) => <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
            headerTitle: (_) => (
                <Pressable onPress={() => {
                    mainDrawerNavigation = navigation.getParent();
                    mainDrawerNavigation.jumpTo("StackNavigator")
                }}>
                    <Image source={require("./assets/images/logo.png")} style={{
                        width: 112,
                        height: 30,
                        resizeMode: 'stretch',
                    }}/>
                </Pressable>
            ),
            headerBackVisible: false,
            })}
        >
            <Stack.Screen 
                name="VideoGalleryScreen" 
                component={VideoGalleryScreen}
            />
            <Stack.Screen 
                name="VideoDetailsScreen" 
                component={VideoDetailsScreen}
                options={({ navigation}) =>( {
                    headerRight: (_) => <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                    headerBackTitleVisible: false,
                })}
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
                    <Drawer.Navigator screenOptions={({navigation}) => ({
                        headerShown: false,
                        headerStyle: {...NavigatorHeaderStyle, backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color},
                        drawerActiveBackgroundColor: ctx.panelSettings.themePrimaryColor,

                        // drawerActiveTintColor: ctx.panelSettings.menuTextColor,
                        drawerActiveTintColor: "white",

                        headerTintColor: ctx.panelSettings.headerTextColor,
                        headerLeft: (_) => <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        headerTitle: (_) => (
                            <Pressable onPress={() => {
                                navigation.navigate("StackNavigator");
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                    })}>
                        <Drawer.Screen name='StackNavigator' component={StackNavigator} options={{
                            drawerLabel: "ANASAYFA",
                        }}/>
                        <Drawer.Screen name='PhotoGalleryStackNavigator' component={PhotoGalleryStackNavigator} options={{ 
                            drawerLabel: "FOTO GALERİ",
                        }}/>
                        <Drawer.Screen name='VideoGalleryStackNavigator' component={VideoGalleryStackNavigator} options={{ 
                            drawerLabel: "VİDEO GALERİ",
                        }}/>
                        <Drawer.Screen name='AuthorsStackNavigator' component={AuthorsStackNavigator} options={{ 
                            drawerLabel: "YAZARLARIMIZ",
                        }}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </>
        );
      }

    return(mainContent);
}

export default MainContent;