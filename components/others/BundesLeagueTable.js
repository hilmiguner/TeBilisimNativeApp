// React Native Temel Paketler
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// API
import newsApi from "../../util/newsApi";

import { Context } from "../../store/context";

function renderItem(item, listLength, itemCount) {
    const isDarkBackground = itemCount % 2 == 1 ? true : false;
    const isGreen = itemCount <= 2 ? true : false;
    const isRed = itemCount >= listLength - 3 ? true : false;
    const textColor = (isGreen && "#518E3B") || (isRed && "#AF2927");
    return(
        <View key={itemCount} style={[styles.headbar, isDarkBackground && { backgroundColor: AppColors.gray100}]}>
            <Text style={{ flex: 1, color: "black" }}>{itemCount}</Text>
            <Text style={{ flex: 3, color: textColor ? textColor : "black", fontSize: 12 }}>{item.takim}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.o}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.g}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.b}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.m}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.a}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.y}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.av}</Text>
            <Text style={{ flex: 1, color: "black", fontSize: 12 }}>{item.p}</Text>
        </View>
    );
}

function BundesLeagueTable() {
    const [data, setData] = useState();
    useEffect(() => {
        newsApi.getStandings("almanya-bundesliga").then((respondData) => {
            ctx.setAppLoader("bl", true);
            setData(respondData);
        });
    }, []);
    const ctx = useContext(Context);

    let content = <ActivityIndicator />;

    let itemCount;

    if(data) {
        itemCount = 0;

        content = (
            <View>
                {
                    data.map((item) => {
                        itemCount += 1;
                        return renderItem(item, data.length, itemCount);
                    })
                }
            </View>
        );
    }

    return(
        <View style={{ flex: 1 }}>
            <View style={styles.headbar}>
                <Text style={{ flex: 1, color: "black" }}></Text>
                <Text style={{ flex: 3, color: "black", fontSize: 12 }}>Takımlar</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>O</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>G</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>B</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>M</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>A</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>Y</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>AV</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 12 }}>P</Text>
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                {content}
            </ScrollView>
        </View>
    );
}

export default BundesLeagueTable;

const styles = StyleSheet.create({
    headbar: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: "white"
    },
});