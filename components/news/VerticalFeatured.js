// React Native Temel Paketler
import { ActivityIndicator } from "react-native";

// Oluşturulan Öğeler
import Card from "../others/Card";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

function VerticalFeatured() {
    const [featuredData, setFeaturedData] = useState();

    useEffect(() => {
        newsApi.getHomeFeatured().then((apiData) => setFeaturedData(apiData));
    }, []);

    let content = <ActivityIndicator />;
    
    if(featuredData) {
        content = (
            <>
                <Card cardData={featuredData[0]}/>
                <Card cardData={featuredData[1]}/>
                <Card cardData={featuredData[2]}/>
            </>
        );
    }
    return content;
}

export default VerticalFeatured;