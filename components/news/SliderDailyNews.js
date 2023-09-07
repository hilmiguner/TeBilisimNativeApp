// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import SliderDailyNewsItem from "./SliderDailyNewsItem";

function SliderDailyNews() {
    return(
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <SliderDailyNewsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderDailyNewsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
            </ScrollView>
        </View>
    );
}

export default SliderDailyNews;

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
});