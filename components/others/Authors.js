// React Native Temel Paketler
import { FlatList } from "react-native";

// Oluşturulan Öğeler
import Author from "./Author";

function Authors({ authorsList }) {
    return(
        <FlatList 
            data={authorsList}
            renderItem={( author ) => <Author authorData={author.item}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
}

export default Authors;