import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function CustomDrawerItem({ label, navigation, screenName }) {
    return(
        <TouchableOpacity onPress={() => navigation.jumpTo(screenName)} style={styles.rootContainer}>
            <Text style={styles.labelText}>{label}</Text>
        </TouchableOpacity>
    );
}

export default CustomDrawerItem;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 12,
        margin: 8,
        backgroundColor: "#dbdada",
        borderRadius: 8,
    },
    labelText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
    },
});