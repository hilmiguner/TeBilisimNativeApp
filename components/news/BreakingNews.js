// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext, useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

// Carousel Paketi
import Carousel from "react-native-reanimated-carousel";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function RenderItem({ title, id }) {
    const navigation = useNavigation();
    const ctx = useContext(Context);

    return(
        <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, id)}>
            <Text adjustsFontSizeToFit numberOfLines={3} style={styles.newsText}>{title}</Text>
        </Pressable>
    );
}

function BreakingNews() {
    const ctx = useContext(Context);
    const [breakingNews, setBreakingNews] = useState();
    const width = Dimensions.get('window').width;

    useEffect(() => {
        newsApi.getBreakingNews().then((breakingNews) => setBreakingNews(breakingNews));
    }, []);

    let content = <ActivityIndicator style={{ alignSelf: "center" }} color={"white"} />
    if (breakingNews) {
        content = (
            <Carousel
                width={width*(4/5)}
                height={width / 6}
                data={breakingNews}
                autoPlay={true}
                scrollAnimationDuration={2000}
                autoPlayInterval={5000}
                style={{ justifyContent: "center", flex: 1}}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                renderItem={({ index }) =>  <RenderItem title={breakingNews[index].title} id={breakingNews[index].id}/>}
            />
        )
    }

    return(
        <View style={[styles.rootContainer, { backgroundColor: ctx.panelSettings.themePrimaryColor }]}>
            <View style={styles.sonDakikaTextContainer}>
                <Text style={[styles.sonDakikaText, styles.sonText]}>SON</Text>
                <Text style={styles.sonDakikaText}>DAKİKA</Text>
            </View>
            <View style={styles.textContainer}>
                { content }
            </View>
        </View>
    );
}

export default BreakingNews;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 16,
        alignItems: "center",
    },
    sonText: {
        fontSize: 26,
    },
    sonDakikaTextContainer: {
        marginRight: 12,
    },
    sonDakikaText: {
        color: AppColors.yellow,
        fontWeight: "bold",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    },
    newsText: {
        marginHorizontal: 4,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});