// React Native Temel Paketler
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function TextButton({ children, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{children}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
});