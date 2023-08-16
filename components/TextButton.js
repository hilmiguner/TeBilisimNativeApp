// React Native Temel Paketler
import { Pressable, StyleSheet, Text } from "react-native";

function TextButton({ children, onPress }) {
    return(
        <Pressable onPress={onPress}>
            <Text style={styles.title}>{children}</Text>
        </Pressable>
    );
}

export default TextButton;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
});