// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

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
                { authors.map((authorItem) => <Author authorData={authorItem}/>) }
            </ScrollView>
        );
    }
    
    return content;
}

export default Authors;