// React Native Temel Paketler
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function TextButton({ children, onPress, textStyle }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.title, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "black",
    },
});