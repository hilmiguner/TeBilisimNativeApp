// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import SliderNewsItem from "./SliderNewsItem";

function SliderNews() {
    return(
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <SliderNewsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderNewsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
            </ScrollView>
        </View>
    );
}

export default SliderNews;

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
});