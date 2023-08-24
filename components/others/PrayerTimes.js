// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
import CountDown from 'react-native-countdown-component';

function PrayerTimes({ data }) {
    const [cityName, setCityName] = useState(null);

    const ctx = useContext(Context);
    useEffect(() => {
        if(!ctx.currentCity) {
            ctx.getCityCTX();
        }
        setCityName(ctx.currentCity);
    }, [ctx.currentCity]);

    let cityContent;
    if(!cityName) {
        cityContent = <ActivityIndicator color="white"/>;
    }
    else {
        cityContent = <Text style={styles.cityName}>{cityName}</Text>;
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
                <IconButton icon="location" color={AppColors.yellow} size={24} onPress={locationIconHandler}/>
            </View>
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.cityNameContainer} onPress={citySelectorHandler}>
                    {cityContent}
                </TouchableOpacity>
                <Text style={styles.statusText}>{data.statusText}</Text>
                <CountDown 
                until={2*(60*60) + 23*(60) + 46}
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
                    <PrayerTimesItem timePeriodText="İMSAK" time="04:48"/>
                    <PrayerTimesItem timePeriodText="GÜNEŞ" time="04:48" isCurrentTime={true}/>
                    <PrayerTimesItem timePeriodText="ÖĞLE" time="04:48"/>
                </View>
                <View style={styles.otherTimesContainer}>
                    <PrayerTimesItem timePeriodText="İKİNDİ" time="04:48"/>
                    <PrayerTimesItem timePeriodText="AKŞAM" time="04:48"/>
                    <PrayerTimesItem timePeriodText="YATSI" time="04:48"/>
                </View>
            </View>
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