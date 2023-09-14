// React Native Temel Paketler
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import BorderButton from "../BorderButton";

// Render HTML
import RenderHTML from "react-native-render-html";

// React Native Hooks
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;
function NewsDetails({ data }) {
    const [fontSizes, setFontSized] = useState({ smallTextFontSize: 18, bigTextFontSize: 20 });

    const newsDateTime = new Date(data.date);
    const htmlSource = { html: data.detail };
    const categoryText = data.category ?  `HABERLER/${data.category.toUpperCase()}` : "Kategorisiz Haber";

    const tagStyles = {
        "p": {
            fontSize: fontSizes.smallTextFontSize,
        },
        "li": {
            fontSize: fontSizes.smallTextFontSize,
        },
        "strong": {
            fontSize: fontSizes.bigTextFontSize,
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

    
    return (
        <View style={styles.rootContainer}>
            <View style={styles.topTextContainer}>
                <Text>{categoryText}</Text>
                <Text>{data.title}</Text>
                <Text>{data.spot}</Text>
                <Text>{newsDateTime.toLocaleDateString("tr-TR" , { dateStyle: "long"})}</Text>
            </View>
            <Image style={styles.image} source={{ uri: data.image }}/>
            <View style={styles.toolsContainer}>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-facebook" color="#4474AE"/>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-twitter" color="#4B9EC5"/>
                <IconButton iconBundle="Ionicons" size={42} icon="logo-whatsapp" color="#54B635"/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="text-fields" color="#757272"/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="comment" color="#4B9EC5"/>
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
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
    },
    topTextContainer: {
        padding: 12,
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
        marginBottom: 4,
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