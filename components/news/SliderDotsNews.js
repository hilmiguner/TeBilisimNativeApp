// React Native Temel Paketler
import { View, Dimensions, StyleSheet } from "react-native";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// Oluşturulan Öğeler
import SliderDotsNewsItem from "./SliderDotsNewsItem";
import CarouselDots from "../CarouselDots";

// React Native Hooks
import { useState } from "react";

function SliderDotsNews({ length }) {
    const width = Dimensions.get('window').width;

    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <View style={styles.rootContainer}>
            <View style={styles.carouselContainer}>
                <Carousel
                    width={width}
                    height={(5 / 7) * width}
                    data={[1, 2, 3]}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    scrollAnimationDuration={100}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                    defaultIndex={currentIndex}
                    renderItem={({ index }) => <SliderDotsNewsItem>{"SLIDER DOTS NEWS HERE! (" + index + ")"}</SliderDotsNewsItem> }
                />
            </View>
            <View style={styles.dotsContainer}>
                <CarouselDots length={length} currentIndex={currentIndex}/>
            </View>
        </View>
    );
}  

export default SliderDotsNews;

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 16,
        overflow: "hidden", 
        justifyContent: "center"
    },
    carouselContainer: {
        zIndex: 0
    },
    dotsContainer: {
        zIndex: 1, 
        position: "absolute", 
        alignSelf: "center", 
        bottom: 12
    },
});