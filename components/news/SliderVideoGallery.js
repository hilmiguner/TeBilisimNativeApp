// React Native Temel Paketler
import { StyleSheet, View, FlatList } from "react-native";

// Oluşturulan Öğeler
import SliderVideoGalleryItem from "./SliderVideoGalleryItem";

function SliderVideoGallery({ videoGalleryData }) {
    return(
        <FlatList
            data={videoGalleryData}
            renderItem={( video ) => <SliderVideoGalleryItem videoData={video.item}/>}
            horizontal={true}
        />
    );
}

export default SliderVideoGallery;