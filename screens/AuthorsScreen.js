// React Native Temel Paketler
import { View, ScrollView, ActivityIndicator } from "react-native";

// React Native Hooks
import { useLayoutEffect, useEffect, useState, useContext } from "react";

// API
import newsApi from "../util/newsApi";

// Context
import { Context } from "../store/context";

// Oluşturulan Öğeler
import AuthorCard from "../components/others/AuthorCard";
import Footer from "../components/others/Footer";

function AuthorsScreen({ navigation }) {
    const [authors, setAuthors] = useState()
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);

    useEffect(() => {
        newsApi.getAuthors().then((apiData) => {setAuthors(apiData)});
    }, []);

    const ctx = useContext(Context);

    let content = <ActivityIndicator />;

    if(authors) {
        content = (
            <ScrollView showsVerticalScrollIndicator={false}>
                { authors.map((authorItem) => (
                    <View key={authorItem.id}>
                        <AuthorCard authorData={authorItem}/>
                    </View>
                )) }
                <Footer>{ctx.panelSettings.footerShortDescription}</Footer>
            </ScrollView>
        );
    }
    
    return content;
}

export default AuthorsScreen;