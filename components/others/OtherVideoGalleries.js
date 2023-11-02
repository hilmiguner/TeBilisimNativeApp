// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import ThreeVideoGallery from "./ThreeVideoGallery";
import BorderButton from "../BorderButton";

// React Native Hooks
import { useState } from "react";

function OtherVideoGalleries({ galleriesData }) {
    const [numberOfGallery, setNumberOfGallery] = useState(9);

    let buttonContent;
    let showingGalleries = [];
    let portionOfGalleries;
    try {
        portionOfGalleries = galleriesData.slice(0, numberOfGallery + 1);
    }
    catch (error) {
        try {
            portionOfGalleries = galleriesData.slice(0, numberOfGallery + 1 - 1);
        }
        catch (error) {
            portionOfGalleries = galleriesData.slice(0, numberOfGallery + 1 - 2);
        }
    }
    for (let index = 0; index < portionOfGalleries.length; index += 3) {
        if(portionOfGalleries[index+1]) {
            if(portionOfGalleries[index+2]) {
                showingGalleries.push([portionOfGalleries[index], portionOfGalleries[index+1], portionOfGalleries[index+2]]);
            }
            else {
                showingGalleries.push([portionOfGalleries[index], portionOfGalleries[index+1]]);
            }
        }
        else {
            showingGalleries.push([portionOfGalleries[index],])
        }
    }
    content = showingGalleries.map((galleryData, index) => <View key={index}><ThreeVideoGallery data={galleryData}/></View>);

    if(galleriesData.length > portionOfGalleries.length) {
        buttonContent = <BorderButton title="Daha fazla göster" onPress={() => setNumberOfGallery((currentValue) => currentValue+3)}/>
    }
    
    return (
        <View style={styles.rootContainer}>
            {content}
            {buttonContent}
        </View>
    );
}

export default OtherVideoGalleries;

const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 18,
    },
});