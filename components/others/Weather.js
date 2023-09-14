// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

// Statik Değerler
import AppColors from "../../constants/colors";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// API
import newsApi from "../../util/newsApi";

function iconParser(apiIcon) {
    if(apiIcon == "day-sunny") return "sunny"
    else if(apiIcon == "cloudy" || apiIcon == "day-cloudy") return "cloud"
    else if(apiIcon == "day-rain") return "rainy"
    else return "close"
}

function Weather() {
    const [cityName, setCityName] = useState(null);
    const [weatherData, setWeatherData] = useState();

    const ctx = useContext(Context);
    useEffect(() => {
        if(!ctx.currentCity) {
            ctx.getCityCTX();
        }
        setCityName(ctx.currentCity);
    }, [ctx.currentCity]);

    useEffect(() => {
        setWeatherData();
        newsApi.getWeather(cityName).then((respondData) => setWeatherData(respondData));
    }, [cityName]);

    let cityContent;
    if(!cityName) {
        cityContent = <ActivityIndicator color="white"/>;
    }
    else {
        cityContent = <Text style={styles.cityName}>{cityName}</Text>;
    }

    let weatherContent = <ActivityIndicator />;
    if(weatherData) {
        weatherContent = (
            <>
                <Ionicons name={ iconParser(weatherData.icon) } color={AppColors.yellow} size={32} style={styles.currentIcon}/>
                <Text style={styles.currentStatusText}>{weatherData.desc}</Text>
                <Text style={styles.currentDegreeText}>{weatherData.degree + " C°"}</Text>
            </>
        );
    }
    
    const navigation = useNavigation();
    
    function citySelectorHandler() {
        cityName ? navigation.navigate("CitySelectionScreen") : null;
    }

    function locationIconHandler() {
        ctx.setCityCTX(null);
        ctx.getCityCTX();
    }

    return(
        <LinearGradient style={styles.rootContainer} colors={["#4593BC", "#2A6B8D"]}>
            <View style={styles.headBar}>
                <Text style={styles.title}>Hava Durumu</Text>
                <IconButton iconBundle="Ionicons" icon="location" color={AppColors.yellow} size={24} onPress={locationIconHandler}/>
            </View>
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.cityNameContainer} onPress={citySelectorHandler}>
                    {cityContent}
                </TouchableOpacity>
                {weatherContent}
            </View>
        </LinearGradient>
    );
}

export default Weather;

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 8,
        margin: 16,
    },
    headBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    statusContainer: {
        margin: 12,
        alignSelf: "center",
    },
    cityNameContainer: {
        padding: 12,
        paddingHorizontal: 32,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 32,
        margin: 8,
    },
    cityName: {
        color: "white",
        fontSize: 24,
    },
    currentIcon: {
        alignSelf: "center",
        margin: 8,
    },
    currentStatusText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",  
        margin: 8,
    },
    currentDegreeText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center", 
        margin: 8,
    },
});