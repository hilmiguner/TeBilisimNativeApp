// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Oluşturulan Öğeler
import ThreeGalleryItem from "./ThreeGalleryItem";

function ThreeGallery({ data }) {
    let secondGallery;
    if(data.length >= 2) {
        secondGallery = (
            <View style={{ flex: 1 }}>
                <ThreeGalleryItem itemData={data[1]} imageStyle={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                    borderRadius: 6,
                }}/>
            </View>
        );
    }
    
    let thirdGallery;
    if(data.length == 3) {
        thirdGallery = (
            <View style={{ flex: 1 }}>
                <ThreeGalleryItem itemData={data[2]} imageStyle={{
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
                    <ThreeGalleryItem itemData={data[0]} imageStyle={{ 
                        width: "100%",
                        height: 200,
                        resizeMode: "cover",
                        borderRadius: 6,}}
                    />
                </View>
                <View style={styles.photosContainer}>
                    {secondGallery}
                    {thirdGallery}
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

export default ThreeGallery;

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