import { createContext, useState } from "react";
import { getCity } from "../util/location";

export const Context = createContext({
    currentCity: "",
    setCityCTX: (name) => {},
    getCityCTX: () => {},
});

function ContextProvider({ children }) {
    const [cityName, setCityName] = useState();

    function setCityCTX(name) {
        setCityName(name);
    }

    function getCityCTX() {
        getCity().then((name) => setCityName(name))
    }

    const value = {
        currentCity: cityName,
        setCityCTX: setCityCTX,
        getCityCTX: getCityCTX,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;