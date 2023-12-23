import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context } from "../store/context";
import { useNavigation } from "@react-navigation/native";

function ExpandableListVertical({ mainLabel, data}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const listHeight = isExpanded ? null : 0;
    const ctx = useContext(Context);
    const navigation = useNavigation();
    
    return(
        <View style={styles.rootContainer}>
                <TouchableOpacity style={styles.innerContainer} onPress={() => setIsExpanded((current) => !current)}>
                    <Text style={styles.mainLabelText}>{mainLabel}</Text>
                    <View style={{ flex: 1, justifyContent: "center", marginLeft: 4}}>
                        <Ionicons name="caret-down"/>
                    </View>
                </TouchableOpacity>
                <View style={{ height: listHeight }}>
                    {data.map((item) => (
                        <TouchableOpacity style={styles.subItemContainer} key={item.id} onPress={() => ctx.navigateCategoryNewsScreen(navigation, item.id)}>
                            <Text style={styles.subLabelText}>{item.baslik}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
        </View>
    );
}

export default ExpandableListVertical;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 8,
        borderWidth: 2,
        borderColor: "#dbdada",
        borderRadius: 12,
    },
    innerContainer: {
        backgroundColor: "#dbdada",
        padding: 12,
        borderRadius: 8,
        flexDirection: "row",
    },
    mainLabelText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
    },
    subItemContainer: {
        marginLeft: 20,
        marginVertical: 8,
    },
    subLabelText: {
        textDecorationLine: "underline",
        fontSize: 15,
        color: "black",
    },
});