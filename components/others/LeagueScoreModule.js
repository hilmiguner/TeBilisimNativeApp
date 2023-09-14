// React Native Temel Paketler
import { StyleSheet, Text } from "react-native";

// Linear Gradient
import LinearGradient from "react-native-linear-gradient";

// Oluşturulan Öğeler
import TopTabsLeague from "./TopTabsLeague";

function LeagueScoreModule({ data }) {
    return(
        <LinearGradient colors={["#6FC355", "#3F6C8A"]} style={{ padding: 20, margin: 16, borderRadius: 8 }}>
            <Text style={styles.leagueScoreText}>Puan Durumu</Text>
            <TopTabsLeague data={data}/>
        </LinearGradient>
    );
}

export default LeagueScoreModule;

const styles = StyleSheet.create({
    leagueScoreText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
});