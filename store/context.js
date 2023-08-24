import { createContext, useState } from "react";
import { getCity } from "../util/location";

export const Context = createContext({
    currentCity: "",
    getCityCTX: () => {},
});

function ContextProvider({ children }) {
    const [cityName, setCityName] = useState();

    function getCityCTX() {
        getCity().then((name) => setCityName(name))
    }

    const value = {
        currentCity: cityName,
        getCityCTX: getCityCTX,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;