// React Native Temel Paketler
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Statik Değerler
import AppColors from "../constants/colors";

function BorderButton({ title, onPress }) {
    return(
        <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default BorderButton;

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: AppColors.gray100,
        padding: 12,
        paddingHorizontal: 24,
        alignSelf: "center",
        backgroundColor: "white",
        margin: 8,
    },
    text: {
        color: "black"
    },
});