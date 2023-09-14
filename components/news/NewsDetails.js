// React Native Temel Paketler
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import BorderButton from "../BorderButton";

const screenWidth = Dimensions.get("window").width;
function NewsDetails({ data }) {
    const newsDateTime = new Date(data.date);
    
    return (
        <View style={styles.rootContainer}>
            <View style={styles.topTextContainer}>
                <Text>{`HABERLER/${data.category.toUpperCase()}`}</Text>
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
            <Text>HABER DETAYLARI(CONTENT)</Text>
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
        marginBottom: 32,
        elevation: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowRadius: 8,
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 0 },
    },
    bottomButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});