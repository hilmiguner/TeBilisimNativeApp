// React Native Temel Paketler
import { View, Text } from "react-native";

// Statik Değerler
import AppColors from "../constants/colors";

function SliderBannerAdsItem({ children }) {
    return(
        <View style={{ backgroundColor: AppColors.red300, flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 24 }}>{children}</Text>
        </View>
    );
}

export default SliderBannerAdsItem;