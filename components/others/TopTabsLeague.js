// React Native Temel Paketler
import { View, Text, useWindowDimensions, Image } from "react-native";

// React Navigation Paketleri
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// React Native Hooks
import { useState } from "react";


function SuperLig({ route }) {
    //const data = route.params.data;
    return(
        <View>
            <Text>Süper Lig</Text>
        </View>
    );
}

function BirinciLig({ route }) {
    //const data = route.params.data;
    return(
        <View>
            <Text>Birinci Lig</Text>
        </View>
    );
}

function PremiereLig({ route }) {
    // const data = route.params.data;
    return(
        <View>
            <Text>Premiere Lig</Text>
        </View>
    );
}

function LFP({ route }) {
    // const data = route.params.data;
    return(
        <View>
            <Text>LFP Lig</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function TopTabsLeague() {
    return (
      <Tab.Navigator style={{ height: 300 }} screenOptions={{
    
      }}>
        <Tab.Screen name="Süper Lig" component={SuperLig} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/superLig.png")}/>
        }}/>
        <Tab.Screen name="Birinci Lig" component={BirinciLig} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/birinciLig.png")}/>
        }}/>
        <Tab.Screen name="Premiere Lig" component={PremiereLig} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/premiereLig.png")}/>
        }}/>
        <Tab.Screen name="LFP" component={LFP} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/lfp.png")}/>
        }}/>
      </Tab.Navigator>
    );
}

export default TopTabsLeague;