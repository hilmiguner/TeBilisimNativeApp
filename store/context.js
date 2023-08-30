import { createContext, useState } from "react";
import { getCity } from "../util/location";
import newsApi from "../util/newsApi";
import setSettings from "../util/panelSettings";

export const Context = createContext({
    currentCity: "",
    panelSettings: "",
    setCityCTX: (name) => {},
    getCityCTX: () => {},
    getPanelSettings: () => {},
});

function ContextProvider({ children }) {
    const [cityName, setCityName] = useState();
    const [panelSettings, setPanelSettings] = useState();

    function setCityCTX(name) {
        setCityName(name);
    }

    function getCityCTX() {
        getCity().then((name) => setCityName(name))
    }

    function getPanelSettings() {
        newsApi.getSettings().then((response) => setPanelSettings(setSettings(response)));
    }

    const value = {
        currentCity: cityName,
        panelSettings: panelSettings,
        setCityCTX: setCityCTX,
        getCityCTX: getCityCTX,
        getPanelSettings: getPanelSettings,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;