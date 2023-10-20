// React Native Temel Paketler
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function VideoGalleryScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);
    return(
        <View>
            <Text>Video Gallery Screen !!!</Text>
        </View>
    );
}

export default VideoGalleryScreen;