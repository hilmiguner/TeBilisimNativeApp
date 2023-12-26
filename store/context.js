import { createContext, useState } from "react";
import { getCity } from "../util/location";
import newsApi from "../util/newsApi";
import setSettings from "../util/panelSettings";

let appLoadingObject = {
    settings: false,
    sl: false,
    fl: false,
    pl: false,
    bl: false,
    ll: false,
};

export const Context = createContext({
    currentCity: "",
    panelSettings: "",
    fontSizes: {},
    isAppLoaded: {},
    setCityCTX: (name) => {},
    getCityCTX: () => {},
    getPanelSettings: () => {},
    manageFontSizes: (fontSizes) => {},
    setAppLoader: (flag) => {},
    navigateNewsDetailScreen: (navigation, id, isPushing) => {},
    navigateArticleDetailScreen: (navigation, id, isPushing) => {},
    navigateGalleryDetailScreen: (navigation, id, isPushing) => {},
    navigateVideoDetailScreen: (navigation, id, isPushing) => {},
    navigateCategoryNewsScreen: (navigation, id, isPushing) => {},
});

function ContextProvider({ children }) {
    const [cityName, setCityName] = useState();
    const [panelSettings, setPanelSettings] = useState();
    const [fontSizes, setFontSizes] = useState({ smallTextFontSize: 18, bigTextFontSize: 20 });
    const [isAppLoaded, setIsAppLoaded] = useState({
        settings: false,
        sl: false,
        fl: false,
        pl: false,
        bl: false,
        ll: false,
    });

    function setCityCTX(name) {
        setCityName(name);
    }

    function getCityCTX() {
        getCity().then((name) => setCityName(name))
    }

    function getPanelSettings() {
        newsApi.getSettings().then((response) => setPanelSettings(setSettings(response)));
    }

    function manageFontSizes(fontSize) {
        setFontSizes({ smallTextFontSize: fontSize, bigTextFontSize: fontSize+2 });
    }

    function setAppLoader(key, flag) {
        appLoadingObject[key] = flag;
        if(Object.keys(appLoadingObject).every((key) => appLoadingObject[key] == true))
        {
            setIsAppLoaded(appLoadingObject);
        }
    }

    function navigateNewsDetailScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("NewsDetailsScreen", { newsID: id });
        }
        else {
            navigation.navigate("NewsDetailsScreen", { newsID: id });
        }
    }

    function navigateArticleDetailScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("ArticleDetailsScreen", { articleID: id });
        }
        else {
            navigation.navigate("ArticleDetailsScreen", { articleID: id });
        }
    }

    function navigateGalleryDetailScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("GalleryDetailsScreen", { galleryID: id });
        }
        else {
            navigation.navigate("GalleryDetailsScreen", { galleryID: id });
        }
    }

    function navigateVideoDetailScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("VideoDetailsScreen", { videoID: id });
        }
        else {
            navigation.navigate("VideoDetailsScreen", { videoID: id });
        }
    }

    function navigateCategoryNewsScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("CategoryNewsScreen", { catID: id });
        }
        else {
            navigation.navigate("CategoryNewsScreen", { catID: id });
        }
    }

    const value = {
        currentCity: cityName,
        panelSettings: panelSettings,
        fontSizes: fontSizes,
        isAppLoaded: isAppLoaded,
        setCityCTX: setCityCTX,
        getCityCTX: getCityCTX,
        getPanelSettings: getPanelSettings,
        manageFontSizes: manageFontSizes,
        setAppLoader: setAppLoader,
        navigateNewsDetailScreen: navigateNewsDetailScreen,
        navigateArticleDetailScreen: navigateArticleDetailScreen,
        navigateGalleryDetailScreen: navigateGalleryDetailScreen,
        navigateVideoDetailScreen: navigateVideoDetailScreen,
        navigateCategoryNewsScreen: navigateCategoryNewsScreen,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;