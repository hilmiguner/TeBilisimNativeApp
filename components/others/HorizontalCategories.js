// React Native Temel Paketler
import { View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import HorizontalCategory from "./HorizontalCategory";

// React Native Hooks
import { useState } from "react";

// API
import newsApi from "../../util/newsApi";

function HorizontalCategories({ categories, tabChangeHandler }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function selectHandler(index, id) {
        newsApi.getCategoryNews(id).then((newsData) => {
            if(newsData.length > 3) {
                newsData = newsData.slice(0, 3);
            }
            tabChangeHandler();
            tabChangeHandler(newsData);
            setSelectedIndex(index);
        });
    }

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((categoryData, index) => {
                return (
                        <View key={index}>
                            <HorizontalCategory 
                                title={categoryData.baslik} 
                                isSelected={true ? index == selectedIndex : false} 
                                onPress={selectHandler.bind(this, index, categoryData.id)}
                            />
                        </View>
                       )
            })}
        </ScrollView>
    );
}

export default HorizontalCategories;