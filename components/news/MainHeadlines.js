// React Native Temel Paketler
import { View, Dimensions, StyleSheet, ActivityIndicator } from "react-native";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// Oluşturulan Öğeler
import MainHeadlinesItem from "./MainHeadlinesItem";
import CarouselDots from "../CarouselDots";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

function MainHeadlines() {
    const width = Dimensions.get('window').width;

    const [mainHeadlinesData, setMainHeadlinesData] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        newsApi.getHeadlineNews().then((apiData) => setMainHeadlinesData(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(mainHeadlinesData) {
        content = (
            <>
                <Carousel
                    width={width}
                    height={(1080/1920) * width}
                    data={mainHeadlinesData}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    scrollAnimationDuration={100}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                    defaultIndex={currentIndex}
                    renderItem={({ index }) => <MainHeadlinesItem itemData={mainHeadlinesData[index]}/>}
                />
                <CarouselDots length={mainHeadlinesData.length} currentIndex={currentIndex}/>
            </>
        );
    }

    return(
        <View style={styles.rootContainer}>
            { content }
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