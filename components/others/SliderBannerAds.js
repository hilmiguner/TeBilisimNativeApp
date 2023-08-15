// React Native Temel Paketler
import { Dimensions } from "react-native";

// Oluşturulan Öğeler
import SliderBannerAdsItem from "./SliderBannerAdsItem";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

function SliderBannerAds() {
    const width = Dimensions.get('window').width;
    return(       
        <Carousel
            width={width-32}
            height={width / 3}
            data={[1,2]}
            scrollAnimationDuration={1000}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
            renderItem={({ index }) => <SliderBannerAdsItem>{"BANNER ADS HERE! (" + index + ")"}</SliderBannerAdsItem> }
        />
    );
}

export default SliderBannerAds;