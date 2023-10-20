// React Native Temel Paketler
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function PhotoGalleryScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);
    return(
        <View>
            <Text>Photo Gallery Screen !!!</Text>
        </View>
    );
}

export default PhotoGalleryScreen;