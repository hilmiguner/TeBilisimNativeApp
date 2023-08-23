// React Native Temel Paketler
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// Oluşturulan Öğeler
import BorderButton from "../BorderButton";

// React Native Hooks
import { useState } from "react";

function renderItem(item, listLength) {
    const isDarkBackground = item.key % 2 == 1 ? true : false;
    const isGreen = item.key <= 2 ? true : false;
    const isRed = item.key >= listLength - 3 ? true : false;
    const textColor = (isGreen && "#518E3B") || (isRed && "#AF2927");
    return(
        <View key={item.key} style={[styles.headbar, isDarkBackground && { backgroundColor: AppColors.gray100}]}>
            <Text style={{ flex: 1, color: "black" }}>{item.key}</Text>
            <Text style={{ flex: 4, color: textColor ? textColor : "black" }}>{item.teamName}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.o}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.g}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.b}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.m}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.a}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.y}</Text>
            <Text style={{ flex: 1, color: "black" }}>{item.p}</Text>
        </View>
    );
}

function LeagueScoreTable({ route }) {
    const data = route.params.data;
    const firstPart = data.slice(0, 8);
    const secondPart = data.slice(data.length - 4, data.length);
    const content = (
        <View>
            {
                firstPart.map((item) => renderItem(item, data.length))
            }
            <BorderButton title="Göster" onPress={showButtonHandler}/>
            {
                secondPart.map((item) => renderItem(item, data.length))
            }
        </View>
    );
    const [currentContent, setCurrentContent] = useState(content);

    function showButtonHandler() {
        setCurrentContent(data.map((item) => renderItem(item, data.length)));
    }

    return(
        <View style={{ flex: 1 }}>
            <View style={styles.headbar}>
                <Text style={{ flex: 1, color: "black" }}></Text>
                <Text style={{ flex: 4, color: "black" }}>Takımlar</Text>
                <Text style={{ flex: 1, color: "black" }}>O</Text>
                <Text style={{ flex: 1, color: "black" }}>G</Text>
                <Text style={{ flex: 1, color: "black" }}>B</Text>
                <Text style={{ flex: 1, color: "black" }}>M</Text>
                <Text style={{ flex: 1, color: "black" }}>A</Text>
                <Text style={{ flex: 1, color: "black" }}>Y</Text>
                <Text style={{ flex: 1, color: "black" }}>P</Text>
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                {currentContent}
            </ScrollView>
        </View>
    );
}

export default LeagueScoreTable;

const styles = StyleSheet.create({
    headbar: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: "white"
    },
});