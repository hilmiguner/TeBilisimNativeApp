// React Native Temel Paketler
import { View, Text, useWindowDimensions, Image } from "react-native";

// React Navigation Paketleri
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// React Native Hooks
import { useState } from "react";

// Oluşturulan Öğeler
import LeagueScoreTable from "./LeagueScoreTable";

const Tab = createMaterialTopTabNavigator();

function TopTabsLeague({ data }) {
    return (
      <Tab.Navigator style={{ height: 500 }}>
        <Tab.Screen name="Süper Lig" component={LeagueScoreTable} initialParams={{ data: data }} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/superLig.png")}/>
        }}/>
        <Tab.Screen name="Birinci Lig" component={LeagueScoreTable} initialParams={{ data: data }} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/birinciLig.png")}/>
        }}/>
        <Tab.Screen name="Premiere Lig" component={LeagueScoreTable} initialParams={{ data: data }} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/premiereLig.png")}/>
        }}/>
        <Tab.Screen name="LFP" component={LeagueScoreTable} initialParams={{ data: data }} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/lfp.png")}/>
        }}/>
      </Tab.Navigator>
    );
}

export default TopTabsLeague;