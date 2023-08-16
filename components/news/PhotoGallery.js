// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import PhotoGalleryItem from "./PhotoGalleryItem";

function PhotoGallery({ data }) {
    return(
        <View style={styles.rootContainer}>
            <View style={styles.bigPhotoContainer}>
                <PhotoGalleryItem itemData={data[0]} imageStyle={{ 
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                    borderRadius: 6,}}
                />
            </View>
            <View style={styles.photosContainer}>
                <View style={{ flex: 1 }}>
                    <PhotoGalleryItem itemData={data[1]} imageStyle={{
                        width: "100%",
                        height: 150,
                        resizeMode: "cover",
                        borderRadius: 6,
                    }}/>
                </View>
                <View style={{ flex: 1 }}>
                    <PhotoGalleryItem itemData={data[2]} imageStyle={{
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