// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";
import CarouselNews from "../components/others/CarouselNews";
import OtherCategoryNews from "../components/news/OtherCategoryNews";

function CategoryNewsScreen({ route }) {
    const [data, setData] = useState();
    const catID = route.params.catID;

    useEffect(() => {
        newsApi.getCategoryNews(catID).then((respond) => setData(respond));
    }, []);

    let content = <ActivityIndicator/>;

    if(data) {
        const carouselNews = data.length > 10 ? data.slice(0, 10) : data;
        const otherNews = data.length > 10 ? data.slice(10, data.length) : null;
        content = (
            <ScrollView>
                <CarouselNews data={carouselNews}/>
                { otherNews && <OtherCategoryNews newsData={otherNews}/> }
            </ScrollView>
        );   
    }
    return content;
}

export default CategoryNewsScreen;