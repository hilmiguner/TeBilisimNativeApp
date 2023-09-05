// React Native Temel Paketler
import { StyleSheet, View, Text } from "react-native";

// Oluşturulan Öğeler
import TextButton from "../TextButton";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function ExpandableList({ children, title, expandButtonTitle, titleTextStyle, buttonTextStyle }) {
    const ctx = useContext(Context);
    return(
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, { color: ctx.panelSettings.moduleTitleTextColor }, titleTextStyle]}>{title}</Text>
                <TextButton textStyle={[{ color: ctx.panelSettings.moduleTitleTextColor }, buttonTextStyle]} onPress={null}>{expandButtonTitle}</TextButton>
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
        color: "black",
    },
});