// React Native Temel Paketler
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import BorderButton from "../BorderButton";
import FontModal from "../others/FontModal";

// Render HTML
import RenderHTML from "react-native-render-html";

// React Native Hooks
import { useState, useContext } from "react";

// Context
import { Context } from "../../store/context";

const screenWidth = Dimensions.get("window").width;
function ArticleDetails({ data }) {
    const [showingSlider, setShowingSlider] = useState(false);

    const ctx = useContext(Context);

    const newsDateTime = new Date(data.date);
    const htmlSource = { html: data.detail };

    const tagStyles = {
        "p": {
            fontSize: ctx.fontSizes.smallTextFontSize,
            color: "black",
        },
        "li": {
            fontSize: ctx.fontSizes.smallTextFontSize,
            color: "black",
        },
        "strong": {
            fontSize: ctx.fontSizes.bigTextFontSize,
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

    return (
        <View style={styles.rootContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.categoryText}>{newsDateTime.toLocaleString()}</Text>
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
            <FontModal isVisible={showingSlider} closeModalHandler={fontSizeButtonHandler}/>
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

export default ArticleDetails;

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
    renderHtmlContainer: {
        padding: 8,
    },
    bottomButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});