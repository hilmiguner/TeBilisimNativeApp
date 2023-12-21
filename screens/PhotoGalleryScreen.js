// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";
import CarouselGallery from "../components/others/CarouselGallery";
import OtherGalleries from "../components/others/OtherGalleries";

function PhotoGalleryScreen() {
    const [galleries, setGalleries] = useState();

    useEffect(() => {
        newsApi.getGalleries().then((respondData) => setGalleries(respondData));
    }, []);

    let content = <ActivityIndicator/>;

    if(galleries) {
        const carouselGallery = galleries.length > 10 ? galleries.slice(0, 10) : galleries;
        const otherGalleries = galleries.length > 10 ? galleries.slice(10, galleries.length) : null;
        content = (
            <ScrollView>
                <CarouselGallery galleries={carouselGallery}/>
                { otherGalleries && <OtherGalleries galleriesData={otherGalleries}/> }
            </ScrollView>
        );   
    }
    return content;
}

export default PhotoGalleryScreen;