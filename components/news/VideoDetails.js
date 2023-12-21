// React Native Temel Paketler
import { Image, View, Text, StyleSheet, Dimensions, ActivityIndicator, Share } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import BorderButton from "../BorderButton";
import FontModal from "../others/FontModal";

// Video
import Video from "react-native-video";

// Render HTML
import RenderHTML from "react-native-render-html";

// React Native Hooks
import { useState, useContext } from "react";

// Context
import { Context } from "../../store/context";

function VideoDetails({ data }) {
    const screenWidth = Dimensions.get("window").width;
    const [showingSlider, setShowingSlider] = useState(false);
    const [showingLoader, setShowingLoader] = useState(true);

    const ctx = useContext(Context);

    const newsDateTime = new Date(data.tarih);
    const htmlSource = { html: data.aciklama };
    const categoryText = data.kategori ?  `VİDEOLAR/${data.kategori.toUpperCase()}` : "Kategorisiz Video";

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

    const shareOptions = {
        title: data.baslik,
        message: `${data.baslik}\n${data.direct_link}`,
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.categoryText}>{categoryText}</Text>
                <Text style={styles.categoryText}>{newsDateTime.toLocaleString()}</Text>
                <Text style={styles.titleText}>{data.baslik}</Text>
                <Text style={[styles.spotText, { display: data.spot ? "flex" : "none" }]}>{data.spot}</Text>
                <Text>{newsDateTime.toLocaleDateString("tr-TR" , { dateStyle: "long"})}</Text>
            </View>
            <View>
                <View style={{ zIndex: 0 }}>
                    <Video 
                        source={{uri:data.dosya}}
                        controls={true}
                        paused={true}
                        resizeMode="contain"
                        style={{
                            width: screenWidth,
                            height: (1080*screenWidth)/1920,
                        }}
                        poster={data.resim}
                        onLoad={() => setShowingLoader(false)}
                    />
                </View>
                {   
                    showingLoader
                    &&
                    <View style={{ 
                        width: screenWidth, 
                        height: (1080*screenWidth)/1920, 
                        backgroundColor: "rgba(0, 0, 0, 0.8)", 
                        zIndex: 1, 
                        position: "absolute", 
                        alignItems: "center", 
                        justifyContent: "center"
                    }}>
                        <ActivityIndicator size={50}/>
                    </View>
                }
            </View>
            <View style={styles.toolsContainer}>
                <IconButton iconBundle="Ionicons" size={42} icon="share-social" color="#4474AE" onPress={
                    () => Share.share(shareOptions)
                }/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="text-fields" color="#757272" onPress={fontSizeButtonHandler}/>
                <IconButton iconBundle="MaterialIcons" size={42} icon="comment" color="#4B9EC5"/>
            </View>
            <FontModal isVisible={showingSlider} closeModalHandler={fontSizeButtonHandler}/>
            <View style={styles.renderHtmlContainer}>
                <RenderHTML tagsStyles={tagStyles} classesStyles={classesStyles} source={htmlSource} contentWidth={screenWidth}/>
            </View>
        </View>
    );
}

export default VideoDetails;

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