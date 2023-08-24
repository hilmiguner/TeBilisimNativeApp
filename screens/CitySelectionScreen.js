// React Native Temel Paketler
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Veriler
import { cities } from "../data/turkeyCities";

// Statik Değerler
import AppColors from "../constants/colors";

// React Native Hooks
import { useContext } from "react";

// Context
import { Context } from "../store/context";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function CitySelectionScreen() {
    const ctx = useContext(Context);

    const navigation = useNavigation();

    function citySelectionHandler(selectedID) {
        const cityName = cities.find((item) => item.id == selectedID).name;
        ctx.setCityCTX(cityName);
        navigation.goBack();
    }
    
    function ListItem({ style, name, id }) {
        return(
            <TouchableOpacity style={[styles.itemRootContainer, style]} onPress={citySelectionHandler.bind(this, id)}>
                <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <FlatList
            data={cities}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ListItem style={item.item.id % 2 == 0 && { backgroundColor: AppColors.gray100 }} name={item.item.name} id={item.item.id}/>}
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
        color: "black",
    },
});