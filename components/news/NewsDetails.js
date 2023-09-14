// React Native Temel Paketler
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import BorderButton from "../BorderButton";

// Render HTML
import RenderHTML from "react-native-render-html";

// Slider
import Slider from "@react-native-community/slider";

// React Native Hooks
import { useState, useContext } from "react";

// Context
import { Context } from "../../store/context";

const screenWidth = Dimensions.get("window").width;
function NewsDetails({ data }) {
    const [fontSizes, setFontSizes] = useState({ smallTextFontSize: 18, bigTextFontSize: 20 });
    const [showingSlider, setShowingSlider] = useState(false);

    const ctx = useContext(Context);

    const newsDateTime = new Date(data.date);
    const htmlSource = { html: data.detail };
    const categoryText = data.category ?  `HABERLER/${data.category.toUpperCase()}` : "Kategorisiz Haber";

    const tagStyles = {
        "p": {
            fontSize: fontSizes.smallTextFontSize,
            color: "black",
        },
        "li": {
            fontSize: fontSizes.smallTextFontSize,
            color: "black",
        },
        "strong": {
            fontSize: fontSizes.bigTextFontSize,
            color: "black",
        },
    };

    const classesStyles = {
        'post-flash': {
            display:'none'
        },
        'post-flash__content': {
            textDecorationLine: 'none',
            padding:8,
            flexDirection: 'row',
        },
        'post-flash__heading':{
            marginTop:8,
            color:'#000',
            textAlign:'center'
        }
    };

    function fontSizeButtonHandler() {
        setShowingSlider((currentValue) => !currentValue);
    }

    function onFontSizeChangeHandler(fontSize) {
        setFontSizes({ smallTextFontSize: fontSize, bigTextFontSize: fontSize+2 });
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.categoryText}>{categoryText}</Text>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={[styles.spotText, { display: data.spot ? "flex" : "none" }]}>{data.spot}</Text>
                <Text>{newsDateTime.toLocaleDateString("tr-TR" , { dateStyle: "long"})}</Text>
            </View>
            <Image style={styles.image} source={{ uri: data.image }}/>
            <View style={styles.toolsContainer}>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-facebook" color="#4474AE"/>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-twitter" color="#4B9EC5"/>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-whatsapp" color="#54B635"/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="text-fields" color="#757272" onPress={fontSizeButtonHandler}/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="comment" color="#4B9EC5"/>
            </View>
            <View style={{ padding: 8, display: showingSlider ? "flex" : "none" }}>
                <Text style={styles.sliderText}>Yazı boyutunu değiştirmek için sürükle</Text>
                <Slider   
                    minimumValue={18}
                    maximumValue={32}
                    minimumTrackTintColor={ctx.panelSettings.themePrimaryColor}
                    maximumTrackTintColor="#DDDCDB"
                    step={1}
                    onSlidingComplete={onFontSizeChangeHandler}
                    tapToSeek={true}
                />
            </View>
            <View style={styles.renderHtmlContainer}>
                <RenderHTML tagsStyles={tagStyles} classesStyles={classesStyles} source={htmlSource} contentWidth={screenWidth}/>
            </View>
            <View style={styles.bottomButtonsContainer}>
                <BorderButton title="YORUM YAP"/>
                <BorderButton title={`YORUM OKU (${data.comment_count})`}/>
            </View>
        </View>
    );
}

export default NewsDetails;

const styles = StyleSheet.create({
    rootContainer: {
        width: "100%",
        height: "100%",
        marginBottom: 12,
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
    },
    topTextContainer: {
        padding: 12,
    },
    categoryText: {
        marginBottom: 18,
        color: "black",
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 18,
        color: "black",
    },
    spotText: {
        fontSize: 18,
        marginBottom: 18,
        color: "black",
    },
    image: {
        width: screenWidth,
        height: screenWidth*(4/7),
        resizeMode: "cover",
    },
    toolsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        marginBottom: 24,
        elevation: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowRadius: 8,
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 0 },
    },
    sliderText: {
        textAlign: "center",
        color: "black",
    },
    renderHtmlContainer: {
        padding: 8,
    },
    bottomButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});