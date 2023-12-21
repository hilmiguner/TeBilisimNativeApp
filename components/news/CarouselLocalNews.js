// React Native Temel Paketler
import { Dimensions } from "react-native";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// Oluşturulan Öğeler
import CarouselDots from "../CarouselDots";
import CarouselLocalNewsItem from "./CarouselLocalNewsItem";

// React Native Hooks
import { useState } from "react";

const screenWidth = Dimensions.get('window').width;

function CarouselLocalNews({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            <Carousel
                width={screenWidth}
                height={(1080/1920) * screenWidth}
                data={data}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                scrollAnimationDuration={100}
                onSnapToItem={(index) => setCurrentIndex(index)}
                defaultIndex={currentIndex}
                renderItem={({ index }) => <CarouselLocalNewsItem itemData={data[index]}/>}
            />
            <CarouselDots length={data.length} currentIndex={currentIndex}/>
        </>
    );
}

export default CarouselLocalNews;