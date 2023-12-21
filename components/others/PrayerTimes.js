// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";
import PrayerTimesItem from "./PrayerTimesItem";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

// Statik Değerler
import AppColors from "../../constants/colors";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// CountDown Paketi
import CountDown from "react-native-countdown-component";

// API
import newsApi from "../../util/newsApi";

function turkishtoEnglish(turkishText) {
    return turkishText.replace('Ğ','g')
        .replace('Ü','u')
        .replace('Ş','s')
        .replace('I','i')
        .replace('İ','i')
        .replace('Ö','o')
        .replace('Ç','c')
        .replace('ğ','g')
 		.replace('ü','u')
        .replace('ş','s')
        .replace('ı','i')
        .replace('ö','o')
        .replace('ç','c');
};

function msToSeconds(ms) {
    return ms / 1000;
}

function whichTimeInterval(timeIntervals, currentDateTime) {
    let respondData = "next-day";
    Object.keys(timeIntervals).every(key => {
        const deltaMilliseconds = (timeIntervals[key]) - currentDateTime;
        if(deltaMilliseconds > 0) {
            respondData = {nextIntervalKey: key, seconds: msToSeconds(deltaMilliseconds)};
            return false
        }
        return true
    });
    return respondData;   
}

function PrayerTimes() {
    const [cityName, setCityName] = useState(null);
    const [prayerTimes, setPrayerTimes] = useState(null);

    const ctx = useContext(Context);
    useEffect(() => {
        if(!ctx.currentCity) {
            ctx.getCityCTX();
        }
        setCityName(ctx.currentCity);
        setPrayerTimes(null);
        if(ctx.currentCity) {
            newsApi.getPrayerTimes(turkishtoEnglish(ctx.currentCity)).then((respondData) => setPrayerTimes(respondData));
        }
    }, [ctx.currentCity]);

    let cityContent;
    if(!cityName) {
        cityContent = <ActivityIndicator color="white"/>;
    }
    else {
        cityContent = <Text style={styles.cityName}>{cityName}</Text>;
    }

    let mainContent = <ActivityIndicator />;
    if(prayerTimes) {
        const currentDateTime = new Date();
        const currentDate = currentDateTime.toISOString().split("T")[0];
        const imsak = new Date(`${currentDate}T${prayerTimes.imsak}:00`);
        const gunes = new Date(`${currentDate}T${prayerTimes.gunes}:00`);
        const ogle = new Date(`${currentDate}T${prayerTimes.ogle}:00`);
        const ikindi = new Date(`${currentDate}T${prayerTimes.ikindi}:00`);
        const aksam = new Date(`${currentDate}T${prayerTimes.aksam}:00`);
        const yatsi = new Date(`${currentDate}T${prayerTimes.yatsi}:00`);

        const timeIntervals = {
            imsak: imsak,
            gunes: gunes,
            ogle: ogle,
            ikindi: ikindi,
            aksam: aksam,
            yatsi: yatsi,
        };

        const nextTimeData = whichTimeInterval(timeIntervals, currentDateTime);
        const statusText = nextTimeData != "next-day" ? `${nextTimeData.nextIntervalKey.charAt(0).toUpperCase()}${nextTimeData.nextIntervalKey.slice(1)} vaktine kalan süre` : "Bugün başka vakit yok";
        mainContent = (
            <>
                <View style={styles.statusContainer}>
                    <TouchableOpacity style={styles.cityNameContainer} onPress={citySelectorHandler}>
                        {cityContent}
                    </TouchableOpacity>
                    <Text style={styles.statusText}>{statusText}</Text>
                    <CountDown 
                        until={nextTimeData.seconds}
                        size={30}
                        timeToShow={["H","M","S"]}
                        timeLabels={{}}
                        showSeparator={true}
                        digitStyle={{ backgroundColor: null }}
                        digitTxtStyle={{ color: AppColors.yellow }}
                        separatorStyle={{ color: AppColors.yellow }}
                    />
                </View>
                <View style={styles.otherTimesMainContainer}>
                    <View style={styles.otherTimesContainer}>
                        <PrayerTimesItem timePeriodText="İMSAK" time={prayerTimes.imsak} isCurrentTime={true ? nextTimeData.nextIntervalKey == "imsak" : null}/>
                        <PrayerTimesItem timePeriodText="GÜNEŞ" time={prayerTimes.gunes} isCurrentTime={true ? nextTimeData.nextIntervalKey == "gunes" : null}/>
                        <PrayerTimesItem timePeriodText="ÖĞLE" time={prayerTimes.ogle} isCurrentTime={true ? nextTimeData.nextIntervalKey == "ogle" : null}/>
                    </View>
                    <View style={styles.otherTimesContainer}>
                        <PrayerTimesItem timePeriodText="İKİNDİ" time={prayerTimes.ikindi} isCurrentTime={true ? nextTimeData.nextIntervalKey == "ikindi" : null}/>
                        <PrayerTimesItem timePeriodText="AKŞAM" time={prayerTimes.aksam} isCurrentTime={true ? nextTimeData.nextIntervalKey == "aksam" : null}/>
                        <PrayerTimesItem timePeriodText="YATSI" time={prayerTimes.yatsi} isCurrentTime={true ? nextTimeData.nextIntervalKey == "yatsi" : null}/>
                    </View>
                </View>
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
        <LinearGradient style={styles.rootContainer} colors={["#78318D", "#3F6A8B"]}>
            <View style={styles.headBar}>
                <Text style={styles.title}>Namaz Vakitleri</Text>
                <IconButton iconBundle="Ionicons" icon="location" color={AppColors.yellow} size={24} onPress={locationIconHandler}/>
            </View>
            {mainContent}
        </LinearGradient>
    );
}

export default PrayerTimes;

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
        fontWeight: "bold",
        textAlign: "center"
    },
    statusText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",  
        margin: 8,
    },
    remainingTimeText: {
        fontSize: 32,
        color: AppColors.yellow,
        textAlign: "center", 
        margin: 8,
    },
    otherTimesMainContainer: {
        flex: 1,
        alignItems: "center",
    },
    otherTimesContainer: {
        flexDirection: "row",
        margin: 12,
    },
});