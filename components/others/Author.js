// React Native Temel Paketler
import { StyleSheet, Text, Image, Pressable } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function Author({ authorData }) {
    const ctx = useContext(Context);
    return(
        <Pressable style={[styles.rootContainer, { borderBottomColor: ctx.panelSettings.themePrimaryColor }]}>
            <Image style={styles.image} source={{ uri: authorData.resim }}/>
            <Text style={styles.text}>{authorData.baslik}</Text>
            <Text style={styles.text}>{authorData.yazaradi}</Text>
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
        width: 200,
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
        marginVertical: 16,
        marginHorizontal: 8,
        color: "black",
    },
});