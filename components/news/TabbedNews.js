// React Native Temel Paketler
import { ActivityIndicator, View } from "react-native";

// Oluşturulan Öğeler
import HorizontalCategories from "../others/HorizontalCategories";
import ThreeNews from "./ThreeNews";

// React Native Hooks
import { useState, useEffect } from "react";

// API 
import newsApi from "../../util/newsApi";

function TabbedNews() {
    const [categories, setCategories] = useState();
    const [tabbedNewsData, setTabbedNews] = useState();

    useEffect(() => {
        newsApi.getCategories().then((categoryData) => {
            setCategories(categoryData);
            if(!tabbedNewsData) {
                newsApi.getCategoryNews(categoryData[0].id).then((newsData) => {
                    if(newsData.length > 3) {
                        newsData = newsData.slice(0, 3);
                    }
                    setTabbedNews(newsData);
                })
            }
        })
    }, []);


    let categoryContent = <ActivityIndicator />;
    let newsContent;

    if(!tabbedNewsData) {
        newsContent = <ActivityIndicator />;
    }

    if(categories) {
        categoryContent = <HorizontalCategories categories={categories} tabChangeHandler={setTabbedNews}/>
    }

    if(tabbedNewsData) {
        newsContent = <ThreeNews data={tabbedNewsData}/>
    }
    return(
        <View>
            {categoryContent}
            {newsContent}
        </View>
    );
}

export default TabbedNews;