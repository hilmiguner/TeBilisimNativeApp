import { Dimensions, StyleSheet, View } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

function CustomHeader() {
    return(
        <View style={styles.rootContainer}></View>
    );
}

export default CustomHeader;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        backgroundColor: "red",
        width: "100%",
        height: SCREEN_HEIGHT*0.1,
    },
});