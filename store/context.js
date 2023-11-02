import { createContext, useState } from "react";
import { getCity } from "../util/location";
import newsApi from "../util/newsApi";
import setSettings from "../util/panelSettings";

export const Context = createContext({
    currentCity: "",
    panelSettings: "",
    fontSizes: {},
    setCityCTX: (name) => {},
    getCityCTX: () => {},
    getPanelSettings: () => {},
    manageFontSizes: (fontSizes) => {},
    navigateNewsDetailScreen: (navigation, id, isPushing) => {},
    navigateArticleDetailScreen: (navigation, id, isPushing) => {},
    navigateVideoDetailScreen: (navigation, id, isPushing) => {},
});

function ContextProvider({ children }) {
    const [cityName, setCityName] = useState();
    const [panelSettings, setPanelSettings] = useState();
    const [fontSizes, setFontSizes] = useState({ smallTextFontSize: 18, bigTextFontSize: 20 });

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

    function navigateVideoDetailScreen(navigation, id, isPushing) {
        if(isPushing) {
            navigation.push("VideoDetailsScreen", { videoID: id });
        }
        else {
            navigation.navigate("VideoDetailsScreen", { videoID: id });
        }
    }

    const value = {
        currentCity: cityName,
        panelSettings: panelSettings,
        fontSizes: fontSizes,
        setCityCTX: setCityCTX,
        getCityCTX: getCityCTX,
        getPanelSettings: getPanelSettings,
        manageFontSizes: manageFontSizes,
        navigateNewsDetailScreen: navigateNewsDetailScreen,
        navigateArticleDetailScreen: navigateArticleDetailScreen,
        navigateVideoDetailScreen: navigateVideoDetailScreen,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;