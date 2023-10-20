// React Native Temel Paketler
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function AuthorsScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);
    return(
        <View>
            <Text>Authors Screen !!!</Text>
        </View>
    );
}

export default AuthorsScreen;