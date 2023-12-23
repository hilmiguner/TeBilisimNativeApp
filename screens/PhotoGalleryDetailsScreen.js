// React Native Temel Paketler
import { ActivityIndicator, Dimensions, StyleSheet, Image, Text, View, Share} from "react-native";

// React Native Hooks
import { useContext, useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Carousel
import Carousel from "react-native-reanimated-carousel";

// Context
import { Context } from "../store/context";

// Oluşturulan Öğeler
import IconButton from "../components/IconButton";
import FontModal from "../components/others/FontModal";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

function RenderItem({ imageUri, text, fontSize}) {
  return(
    <View>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={{ padding: 12}}>
        <Text style={{ fontSize: fontSize, color: "black" }}>{text}</Text>
      </View>
    </View>
  );
}

function PhotoGalleryDetailsScreen({ route }) {
  const [data, setData] = useState();
  const [showingSlider, setShowingSlider] = useState(false);

  function fontSizeButtonHandler() {
    setShowingSlider((currentValue) => !currentValue);
  }

  const ctx = useContext(Context);

  useEffect(() => {
    if (route.params) {
      newsApi.getGalleryDetail(route.params.galleryID).then((respondData) => setData(respondData));
    }
  }, []);

  let content = <ActivityIndicator />;

  if(data) {
    const images = data.resimler;
    const shareOptions = {
      title: data.baslik,
      message: `${data.baslik}\n${data.direct_link}`,
    };
    content = (
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{data.baslik}</Text>
        </View>
        <View style={styles.toolsContainer}>
          <IconButton iconBundle="Ionicons" size={42} icon="share-social" color="#4474AE" onPress={
            () => Share.share(shareOptions)
          }/>
          <IconButton iconBundle="MaterialIcons" size={42} icon="text-fields" color="#757272" onPress={fontSizeButtonHandler}/>
        </View>
        <FontModal isVisible={showingSlider} closeModalHandler={fontSizeButtonHandler}/>
        <Carousel
          width={screenWidth}
          data={images}
          autoPlay={false}
          scrollAnimationDuration={500}
          renderItem={({ index }) => <RenderItem imageUri={images[index].uri} text={images[index].aciklama} fontSize={ctx.fontSizes.smallTextFontSize}/> }
        />
      </View>
    );
  }

  return content;
}

export default PhotoGalleryDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    titleContainer: {
      padding: 12,
    },
    titleText: {
      fontWeight: "bold",
      fontSize: 20,
      color: "black",
    },
    image: {
      width: screenWidth,
      height: screenHeight*0.2,
      resizeMode: "cover",
    },
    toolsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 8,
      backgroundColor: "white",
      elevation: 8,
  },
});