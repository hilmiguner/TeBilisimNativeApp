// React Native Temel Paketler
import { ActivityIndicator, ScrollView, View } from "react-native";

// Oluşturulan Öğeler
import Author from "./Author";

// API
import newsApi from "../../util/newsApi";

// React Native Hooks
import { useEffect, useState } from "react";

function Authors() {
    const [authors, setAuthors] = useState()

    useEffect(() => {
        newsApi.getAuthors().then((apiData) => setAuthors(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(authors) {
        content = (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { authors.map((authorItem) => (
                    <View key={authorItem.id}>
                        <Author authorData={authorItem}/>
                    </View>
                )) }
            </ScrollView>
        );
    }
    
    return content;
}

export default Authors;