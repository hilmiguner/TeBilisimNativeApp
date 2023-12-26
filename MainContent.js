// React Native Temel Paketler
import { Image, ActivityIndicator, View, StatusBar, Pressable, DevSettings, Platform, Dimensions, Text } from "react-native";

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
import CustomHeader from "./components/CustomHeader";
import PhotoGalleryDetailsScreen from "./screens/PhotoGalleryDetailsScreen";
import LocalNewsScreen from "./screens/LocalNewsScreen";
import CustomDrawerContent from "./components/CustomDrawerContent";
import CategoryNewsScreen from "./screens/CategoryNewsScreen";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerShown: true,
            header: () => CustomHeader({ 
                left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                center: (
                    <Pressable onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StackNavigator' }],
                        });
                    }}>
                        <Image source={require("./assets/images/logo.png")} style={{
                            width: 112,
                            height: 30,
                            resizeMode: 'stretch',
                        }}/>
                    </Pressable>
                ),
                backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                useSafeArea: true,
            })
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
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="ArticleDetailsScreen" 
                component={ArticleDetailsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="GalleryDetailsScreen" 
                component={PhotoGalleryDetailsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="VideoDetailsScreen" 
                component={VideoDetailsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="CitySelectionScreen" 
                component={CitySelectionScreen}
                options={({ navigation }) => ({ 
                    presentation: "modal",
                    header: () => CustomHeader({ 
                        center: (
                            <Pressable onPress={null}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={() => navigation.goBack()} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                    })
                })}
            />
            <Stack.Screen 
                name="DailyNewsScreen" 
                component={DailyNewsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="FeaturedNewsScreen" 
                component={FeaturedNewsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="TrendNewsScreen" 
                component={TrendNewsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="LocalNewsScreen" 
                component={LocalNewsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
            <Stack.Screen 
                name="CategoryNewsScreen" 
                component={CategoryNewsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
        </Stack.Navigator>
    );
}

function AuthorsStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            header: () => CustomHeader({ 
                left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                center: (
                    <Pressable onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StackNavigator' }],
                        });
                    }}>
                        <Image source={require("./assets/images/logo.png")} style={{
                            width: 112,
                            height: 30,
                            resizeMode: 'stretch',
                        }}/>
                    </Pressable>
                ),
                backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                useSafeArea: true,
            })
            })}
        >
            <Stack.Screen 
                name="AuthorsScreen" 
                component={AuthorsScreen}
            />
            <Stack.Screen 
                name="ArticleDetailsScreen" 
                component={ArticleDetailsScreen}
                options={({ navigation }) => ({
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
        </Stack.Navigator>
    );
}

function PhotoGalleryStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            header: () => CustomHeader({ 
                left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                center: (
                    <Pressable onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StackNavigator' }],
                        });
                    }}>
                        <Image source={require("./assets/images/logo.png")} style={{
                            width: 112,
                            height: 30,
                            resizeMode: 'stretch',
                        }}/>
                    </Pressable>
                ),
                backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                useSafeArea: true,
            }),
            })}
        >
            <Stack.Screen 
                name="PhotoGalleryScreen" 
                component={PhotoGalleryScreen}
            />
            <Stack.Screen 
                name="GalleryDetailsScreen" 
                component={PhotoGalleryDetailsScreen}
                options={({ navigation}) =>( {
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
                })}
            />
        </Stack.Navigator>
    );
}

function VideoGalleryStackNavigator() {
    const ctx = useContext(Context);
    return(
        <Stack.Navigator screenOptions={({navigation}) => ({
            header: () => CustomHeader({ 
                left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                center: (
                    <Pressable onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StackNavigator' }],
                        });
                    }}>
                        <Image source={require("./assets/images/logo.png")} style={{
                            width: 112,
                            height: 30,
                            resizeMode: 'stretch',
                        }}/>
                    </Pressable>
                ),
                backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                useSafeArea: true,
            })
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
                    header: () => CustomHeader({ 
                        left: <IconButton icon="menu" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.toggleDrawer} iconBundle="Ionicons"/>,
                        center: (
                            <Pressable onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'StackNavigator' }],
                                });
                            }}>
                                <Image source={require("./assets/images/logo.png")} style={{
                                    width: 112,
                                    height: 30,
                                    resizeMode: 'stretch',
                                }}/>
                            </Pressable>
                        ),
                        right: <IconButton icon="chevron-back" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={navigation.goBack} iconBundle="Ionicons"/>,
                        backgroundColor: ctx.panelSettings.headerAndStatusBarBG_Color,
                        useSafeArea: true,
                    })
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
            ctx.setAppLoader("settings", true);
        }
    }, [ctx.panelSettings]);

    const loadingScreen = (
        <View style={{ zIndex: 1, position: "absolute", width: screenWidth, height: screenHeight, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
            <Image 
                source={require("./assets/images/logo.png")}
                style={{
                    width: 224,
                    height: 60,
                    marginBottom: 20,
                }}
            />
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
                <Text style={{ marginRight: 20, fontWeight: "bold", fontSize: 24, color: "black" }}>Haberler yükleniyor</Text>
                <ActivityIndicator />
            </View>
        </View>
    );

    let mainContent = (
        <View style={{ zIndex: 1, position: "absolute", width: screenWidth, height: screenHeight, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
            <Image 
                source={require("./assets/images/logo.png")}
                style={{
                    width: 224,
                    height: 60,
                    marginBottom: 20,
                }}
            />
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
                <Text style={{ marginRight: 20, fontWeight: "bold", fontSize: 24, color: "black" }}>Veriler yükleniyor</Text>
                <ActivityIndicator />
            </View>
        </View>
    );

    if(ctx.panelSettings) {
        mainContent = (
            <>
                <StatusBar barStyle={ctx.panelSettings.iosStatusBarContentColor} backgroundColor={ctx.panelSettings.mobile_app_bar_style_color}/>
                { Object.keys(ctx.isAppLoaded).some((key) => ctx.isAppLoaded[key] == false) ? loadingScreen : null }
                <View style={{ zIndex: 0, flex: 1, }}>
                    <NavigationContainer>
                        <Drawer.Navigator 
                        drawerContent={(props) => CustomDrawerContent(props)}
                        screenOptions={{
                            headerShown: false,
                            drawerActiveBackgroundColor: ctx.panelSettings.themePrimaryColor,
                            // drawerActiveTintColor: ctx.panelSettings.menuTextColor,
                            drawerActiveTintColor: "white",
                        }}>
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
                </View>
            </>
        );
      }

    return(mainContent);
}

export default MainContent;