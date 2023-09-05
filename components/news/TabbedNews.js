// React Native Temel Paketler
import { View } from "react-native";

// Oluşturulan Öğeler
import HorizontalCategories from "../others/HorizontalCategories";
import ThreeNews from "./ThreeNews";

// React Native Hooks
import { useState } from "react";

function TabbedNews({ data }) {
    const [tabbedNewsTitle, setTabbedNewsTitle] = useState("Gündem");
    let newsContent = <ThreeNews data={data} title={tabbedNewsTitle}/>
    return(
        <View>
            <HorizontalCategories tabChangeHandler={setTabbedNewsTitle}/>
            { newsContent }
        </View>
    );
}

export default TabbedNews;