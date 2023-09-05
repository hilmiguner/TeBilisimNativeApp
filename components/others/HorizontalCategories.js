// React Native Temel Paketler
import { ScrollView } from "react-native";

// Oluşturulan Öğeler
import HorizontalCategory from "./HorizontalCategory";

// React Native Hooks
import { useState } from "react";

function HorizontalCategories({ tabChangeHandler }) {
    const templateData = [
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    const [isSelectedData, setIsSelectedData] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
    ]);
    const titles = [
        "Gündem",
        "Siyaset",
        "Dünya",
        "Sağlık",
        "Astroloji",
        "Futbol",
    ];

    function selectHandler(index) {
        templateData[index] = true;
        setIsSelectedData(templateData);
        tabChangeHandler(titles[index]);
    }

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HorizontalCategory title="Gündem" isSelected={isSelectedData[0]} onPress={selectHandler.bind(this, 0)}/>
            <HorizontalCategory title="Siyaset" isSelected={isSelectedData[1]} onPress={selectHandler.bind(this, 1)}/>
            <HorizontalCategory title="Dünya" isSelected={isSelectedData[2]} onPress={selectHandler.bind(this, 2)}/>
            <HorizontalCategory title="Sağlık" isSelected={isSelectedData[3]} onPress={selectHandler.bind(this, 3)}/>
            <HorizontalCategory title="Astroloji" isSelected={isSelectedData[4]} onPress={selectHandler.bind(this, 4)}/>
            <HorizontalCategory title="Futbol" isSelected={isSelectedData[5]} onPress={selectHandler.bind(this, 5)}/>
        </ScrollView>
    );
}

export default HorizontalCategories;