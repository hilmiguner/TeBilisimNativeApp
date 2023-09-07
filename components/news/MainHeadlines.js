// React Native Temel Paketler
import { View, Dimensions, StyleSheet } from "react-native";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// Oluşturulan Öğeler
import MainHeadlinesItem from "./MainHeadlinesItem";
import CarouselDots from "../CarouselDots";

// React Native Hooks
import { useState } from "react";

function MainHeadlines({ data }) {
    const width = Dimensions.get('window').width;

    const dataLength = data.length;

    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <View style={styles.rootContainer}>
            <Carousel
                width={width}
                height={(1080/1920) * width}
                data={data}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                scrollAnimationDuration={100}
                onSnapToItem={(index) => setCurrentIndex(index)}
                defaultIndex={currentIndex}
                renderItem={({ index }) => <MainHeadlinesItem itemData={data[index]}/>}
            />
            <CarouselDots length={dataLength} currentIndex={currentIndex}/>
        </View>
    );
}  

export default MainHeadlines;

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 16,
        overflow: "hidden", 
        alignItems: "center",
    },
});