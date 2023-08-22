// React Native Temel Paketler
import { Pressable, StyleSheet, Text } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

function HorizontalCategory({ title, isSelected, onPress }) {
    const rootContainerStyle = (isSelected ? {
        backgroundColor: AppColors.red300,
        borderColor: AppColors.red300,
    } : {
        backgroundColor: "#FFFFFF",
        borderColor: AppColors.gray200,
    });

    const textStyle = (isSelected ? {
        color: "white",
    } : {
        color: "black",
    });

    return(
        <Pressable style={[styles.rootContainer, rootContainerStyle]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
} 

export default HorizontalCategory;

const styles = StyleSheet.create({
    rootContainer: {
        borderWidth: 2,
        borderRadius: 24,
        padding: 12,
        marginVertical: 12,
        marginHorizontal: 8,
    },
});