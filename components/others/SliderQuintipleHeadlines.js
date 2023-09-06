// React Native Temel Paketler
import { ActivityIndicator, Dimensions, StyleSheet, Image, Pressable } from "react-native";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// API 
import newsApi from "../../util/newsApi";

function RenderItem({ imageUri, id }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();
    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, id)}>
            <Image style={styles.image} source={{ uri: imageUri }} />
        </Pressable>
    );
}

function SliderQuintipleHeadlines() {
    const [quintipleHeadlines, setQuintipleHeadlines] = useState();
    const width = Dimensions.get('window').width;

    useEffect(() => {
        newsApi.getQuintetHeadlineNews().then((newsData) => setQuintipleHeadlines(newsData));
    }, []);

    let content = <ActivityIndicator />;

    if(quintipleHeadlines) {
        content = (
            <Carousel
                width={width-32}
                height={width * (2/7)}
                data={quintipleHeadlines}
                autoPlay={true}
                scrollAnimationDuration={2000}
                autoPlayInterval={5000}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                renderItem={({ index }) => <RenderItem imageUri={quintipleHeadlines[index].fives} id={quintipleHeadlines[index].id}/> }
            />
        );
    }

    return content;
}

export default SliderQuintipleHeadlines;

const styles = StyleSheet.create({
    rootContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "gray"
    },
    image: { 
        width: "100%", 
        height: "100%", 
        resizeMode: "stretch" 
    },
});