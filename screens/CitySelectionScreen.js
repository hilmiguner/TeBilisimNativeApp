// React Native Temel Paketler
import { FlatList, StyleSheet, Text, View } from "react-native";

// Veriler
import { cities } from "../data/turkeyCities";

// Statik Değerler
import AppColors from "../constants/colors";

function renderItem({ name }) {
    return(
        <View style={styles.itemRootContainer}>
            <Text style={styles.itemText}>{name}</Text>
        </View>
    );
}

function CitySelectionScreen() {
    return(
        <View>
            <FlatList
            data={cities}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <View style={[styles.itemRootContainer, item.item.id % 2 == 0 && { backgroundColor: AppColors.gray100 }]}>
                    <Text style={styles.itemText}>{item.item.name}</Text>
                </View>
            )}
            />
        </View>
    );
}

export default CitySelectionScreen;

const styles = StyleSheet.create({
    itemRootContainer: {
        flex: 1,
        padding: 12,
    },
    itemText: {
        textAlign: "center",
        fontSize: 24,
    },
});