// React Native Temel Paketler
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import SliderNewsTopItem from "./SliderNewsTopItem";

function SliderNewsTop() {
    return(
        <View style={styles.rootContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <SliderNewsTopItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderNewsTopItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
            </ScrollView>
        </View>
    );
}

export default SliderNewsTop;

const styles = StyleSheet.create({
    rootContainer: {
    },
    scrollView: {
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
});