// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Animated Dots Carousel paketi
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

// Statik Değerler
import AppColors from '../constants/colors';

function CarouselDots({ length, currentIndex }) {
    
    return(
        <View style={styles.rootContainer}>
            <AnimatedDotsCarousel
                length={length}
                currentIndex={currentIndex}
                maxIndicators={length}
                interpolateOpacityAndColor={true}
                activeIndicatorConfig={{
                    color: AppColors.red300,
                    margin: 3,
                    opacity: 1,
                    size: 8,
                }}
                inactiveIndicatorConfig={{
                    color: AppColors.gray300,
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                }}
                decreasingDots={[
                    {
                        config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
                        quantity: 1,
                    },
                    {
                        config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
                        quantity: 1,
                    },
                ]}
            />
        </View>
    );
}

export default CarouselDots;

const styles = StyleSheet.create({
    rootContainer: { 
        backgroundColor: "black", 
        height: 30, 
        width: "100%", 
        alignItems: "center", 
        paddingTop: 12, 
    },
});