// React Native Temel Paketler
import { Image } from "react-native";

// React Navigation Paketleri
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Oluşturulan Öğeler
import SuperLeagueTable from "./SuperLeagueTable";
import FirstLeagueTable from "./FirstLeagueTable";
import PremiereLeagueTable from "./PremiereLeagueTable";
import BundesLeagueTable from "./BundesLeagueTable";
import LaLigaTable from "./LaLigaTable";

const Tab = createMaterialTopTabNavigator();

function TopTabsLeague() {
    return (
      <Tab.Navigator style={{ height: 500 }}>
        <Tab.Screen name="Süper Lig" component={SuperLeagueTable} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/superLig.png")}/>
        }}/>
        <Tab.Screen name="Birinci Lig" component={FirstLeagueTable} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/birinciLig.png")}/>
        }}/>
        <Tab.Screen name="Premiere Lig" component={PremiereLeagueTable} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/premiereLig.png")}/>
        }}/>
        <Tab.Screen name="Bundes Lig" component={BundesLeagueTable} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/bundesliga.png")}/>
        }}/>
        <Tab.Screen name="LaLiga" component={LaLigaTable} options={{ 
            tabBarShowLabel: false,
            tabBarIconStyle: { justifyContent: "center", alignItems: "center" ,margin: 24 },
            tabBarIcon: (_) => <Image style={{ width: 70, height: 70, resizeMode: "contain" }} source={require("../../assets/images/lfp.png")}/>
        }}/>
      </Tab.Navigator>
    );
}

export default TopTabsLeague;