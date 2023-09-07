// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import PhotoGalleryItem from "./PhotoGalleryItem";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

function PhotoGallery() {
    const [galleryData, setGalleryData] = useState();

    useEffect(() => {
        newsApi.getHomeGalleries().then((apiData) => setGalleryData(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(galleryData) {
        content = (
        <View style={styles.rootContainer}>
            <View style={styles.bigPhotoContainer}>
                <PhotoGalleryItem itemData={galleryData[0]} imageStyle={{ 
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                    borderRadius: 6,}}
                />
            </View>
            <View style={styles.photosContainer}>
                <View style={{ flex: 1 }}>
                    <PhotoGalleryItem itemData={galleryData[1]} imageStyle={{
                        width: "100%",
                        height: 150,
                        resizeMode: "cover",
                        borderRadius: 6,
                    }}/>
                </View>
                <View style={{ flex: 1 }}>
                    <PhotoGalleryItem itemData={galleryData[2]} imageStyle={{
                        width: "100%",
                        height: 150,
                        resizeMode: "cover",
                        borderRadius: 6,
                    }}/>
                </View>
            </View>
        </View>
        );
    }
    return content;
}

export default PhotoGallery;

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
});