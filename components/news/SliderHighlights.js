// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import SliderHighlightsItem from "./SliderHighlightsItem";

function SliderHighlights() {
    return(
        <View style={styles.rootContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <SliderHighlightsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderHighlightsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
                <SliderHighlightsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderHighlightsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
            </ScrollView>
        </View>
    );
}

export default SliderHighlights;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
});