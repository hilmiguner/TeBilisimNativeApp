// React Native Temel Paketler
import { Pressable, StyleSheet } from "react-native";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

function IconButton({ icon, size, color, onPress }) {
    return(
        <Pressable style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 12,
    },
    pressed: {
        opacity: 0.7,
    },
});