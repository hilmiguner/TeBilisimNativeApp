// React Native Temel Paketler
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";

// Statik Değerler
import AppColors from "../../constants/colors";

function Footer({ children }) {
    return(
        <View style={styles.rootContainer}>
            <View>
                <Image style={styles.image} source={require("../../assets/images/logo.png")}/>
                <Text style={styles.text}>{children}</Text>
            </View>
            <View style={styles.socialMediaContainer}>
                <View style={styles.socialMediaLogo}>
                    <IconButton icon="logo-facebook" color="black" size={24}/>
                </View>
                <View style={styles.socialMediaLogo}>
                    <IconButton icon="logo-twitter" color="black" size={24}/>
                </View>
                <View style={styles.socialMediaLogo}>
                    <IconButton icon="logo-instagram" color="black" size={24}/>
                </View>
                <View style={styles.socialMediaLogo}>
                    <IconButton icon="logo-youtube" color="black" size={24}/>
                </View>
                <View style={styles.socialMediaLogo}>
                    <IconButton icon="logo-linkedin" color="black" size={24}/>
                </View>
            </View>
            <Text style={{ textAlign: "center", padding: 16, color: AppColors.gray500 }}>Copyright © 2023. Her hakkı saklıdır.</Text>
            <View style={{ backgroundColor: AppColors.gray100, flexDirection: "row", justifyContent: "center", padding: 12 }}>
                <Text style={{ fontWeight: "bold", color: "black" }}>Yazılım & Tasarım:</Text>
                <Text style={{ color: AppColors.gray500 }}> TE Bilişim v3.2</Text>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 16,
    },
    image: {
        width: 112,
        height: 30,
        alignSelf: "center"
    },
    text: {
        textAlign: "center",
        color: "black",
        fontSize: 18,
        margin: 12,
    },
    socialMediaContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: AppColors.red300,
        paddingHorizontal: 18,
    },
    socialMediaLogo: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
    },
});