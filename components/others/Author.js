// React Native Temel Paketler
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";
import imageMapping from "../../constants/imageMapping";

function Author({ authorData }) {
    const image = imageMapping[authorData.imageName];
    const content = authorData.content;
    const authorName = authorData.authorName;

    return(
        <Pressable style={styles.rootContainer}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.text}>{content}</Text>
            <Text style={styles.text}>{authorName}</Text>
        </Pressable>
    );
}

export default Author;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: AppColors.gray100,
        justifyContent: "space-between",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 6,
        borderBottomColor: AppColors.red300,
        width: 200,
        //padding: 16,
        margin: 12,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: "center",
        margin: 16,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
        flexWrap: "wrap",
        marginVertical: 16,
    },
});