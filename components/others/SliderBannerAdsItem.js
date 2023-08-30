// React Native Temel Paketler
import { View, Text, StyleSheet } from "react-native";

// Uygulama Ayarları(API)
import PanelSettings from "../../util/panelSettings";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function SliderBannerAdsItem({ children }) {
    const ctx = useContext(Context);
    return(
        <View style={[styles.rootContainer, { backgroundColor: ctx.panelSettings.themePrimaryColor }]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default SliderBannerAdsItem;

const styles = StyleSheet.create({
    rootContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    text: { 
        textAlign: "center", 
        fontSize: 24, 
        alignSelf: "stretch" 
    },
});