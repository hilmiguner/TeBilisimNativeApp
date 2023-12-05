// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useLayoutEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";
import CarouselVideoGallery from "../components/others/CarouselVideoGallery";
import OtherVideoGalleries from "../components/others/OtherVideoGalleries";

function VideoGalleryScreen() {
    const [galleries, setGalleries] = useState();

    useEffect(() => {
        newsApi.getVideos(1).then((respondData) => setGalleries(respondData));
    }, []);

    let content = <ActivityIndicator/>;

    if(galleries) {
        const carouselGallery = galleries.length > 10 ? galleries.slice(0, 10) : galleries;
        const otherGalleries = galleries.length > 10 ? galleries.slice(10, galleries.length) : null;
        content = (
            <ScrollView>
                <CarouselVideoGallery galleries={carouselGallery}/>
                { otherGalleries && <OtherVideoGalleries galleriesData={otherGalleries}/> }
            </ScrollView>
        );   
    }
    return content;
}

export default VideoGalleryScreen;