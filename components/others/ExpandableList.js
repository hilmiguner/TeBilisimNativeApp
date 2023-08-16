// React Native Temel Paketler
import { StyleSheet, View, Text } from "react-native";

// Oluşturulan Öğeler
import TextButton from "../TextButton";

function ExpandableList({ children, title, expandButtonTitle }) {
    return(
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TextButton onPress={null}>{expandButtonTitle}</TextButton>
            </View>
            {children}
        </View>
    );
}

export default ExpandableList;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 16,
    },
    titleContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});