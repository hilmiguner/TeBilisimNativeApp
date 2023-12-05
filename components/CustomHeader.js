import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

function CustomHeader({ left, center, right, backgroundColor, useSafeArea }) {
    const safeAreaInsets = useSafeAreaInsets();

    const paddingTop = useSafeArea ? safeAreaInsets.top : 0;

    const leftComponent = <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>{left}</View>
    const centerComponent = <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>{center}</View>
    const rightComponent = <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>{right}</View>

    return(
        <View style={[styles.rootContainer, { backgroundColor: backgroundColor }]}>
            <View style={[styles.innerContainer,  { paddingTop: paddingTop, justifyContent: "space-between" }]}>
                {leftComponent}
                {centerComponent}
                {rightComponent}
            </View>
        </View>
    );
}

export default CustomHeader;

const styles = StyleSheet.create({
    rootContainer: {
        width: "100%",
        height: SCREEN_HEIGHT*0.13,
        justifyContent: "center"
    },
    innerContainer: {
        flexDirection: "row",
    },
});