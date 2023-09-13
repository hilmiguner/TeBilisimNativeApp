// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Oluşturulan Öğeler
import ThreeNewsItem from "./ThreeNewsItem";

function ThreeNews({ data }) {
    let secondNews;
    if(data.length >= 2) {
        secondNews = (
            <View style={{ flex: 1 }}>
                <ThreeNewsItem itemData={data[1]} imageStyle={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                    borderRadius: 6,
                }}/>
            </View>
        );
    }
    
    let thirdNews;
    if(data.length == 3) {
        thirdNews = (
            <View style={{ flex: 1 }}>
                <ThreeNewsItem itemData={data[2]} imageStyle={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                    borderRadius: 6,
                }}/>
            </View>
        );
    }

    let content = (
        <View style={styles.noNewsTextContaniner}>
            <Text style={styles.noNewsText}>Mevcut Haber Bulunamadı</Text>
        </View>
    );
    if(data.length >= 1) {
        content = (
            <>
                <View style={styles.bigPhotoContainer}>
                    <ThreeNewsItem itemData={data[0]} imageStyle={{ 
                        width: "100%",
                        height: 200,
                        resizeMode: "cover",
                        borderRadius: 6,}}
                    />
                </View>
                <View style={styles.photosContainer}>
                    {secondNews}
                    {thirdNews}
                </View>
            </>
        );
    }
    return(
        <View style={styles.rootContainer}>
            {content}
        </View>
    );
}

export default ThreeNews;

const styles = StyleSheet.create({
    rootContainer: {
        width: "100%",
    },
    bigPhotoContainer: {
        width: "100%",
    },
    photosContainer: {
        width: "100%",
        flexDirection: "row",
    },
    noNewsTextContaniner: {
        alignSelf: "center",
    },
    noNewsText: {
        fontWeight: "bold",
    },
});