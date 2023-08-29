// React Native Temel Paketler
import { View, Text, StyleSheet } from "react-native";

// Uygulama Ayarları(API)
import PanelSettings from "../../util/panelSettings";

function SliderBannerAdsItem({ children }) {
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default SliderBannerAdsItem;

const styles = StyleSheet.create({
    rootContainer: { 
        backgroundColor: PanelSettings.themePrimaryColor, 
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