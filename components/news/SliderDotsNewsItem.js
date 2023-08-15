// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

function SliderDotsNewsItem({ children }) {
    return(
        <View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 24, alignSelf: "stretch", color: "white" }}>{children}</Text>
        </View>
    );
}

export default SliderDotsNewsItem;