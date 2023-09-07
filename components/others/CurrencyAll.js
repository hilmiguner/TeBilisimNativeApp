// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import CurrencyItem from "./CurrencyItem";

// Statik Değerler
import AppColors from "../../constants/colors";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

function CurrencyAll() {
    const [currencyData, setCurrencyData] = useState();

    useEffect(() => {
        newsApi.getCurrency().then((apiData) => setCurrencyData(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(currencyData) {
        content = (
            <>
                <View style={styles.subcontainer}>
                    <CurrencyItem icon="attach-money" currentValue={currencyData.DOLAR.deger} deltaValue={"%" + currencyData.DOLAR.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.DOLAR.durum == "up" : false} currencyName="DOLAR"/>
                    <CurrencyItem icon="euro" currentValue={currencyData.EURO.deger} deltaValue={"%" + currencyData.EURO.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.EURO.durum == "up" : false} currencyName="EURO"/>
                    <CurrencyItem icon="diamond" currentValue={currencyData.ALTIN.deger} deltaValue={"%" + currencyData.ALTIN.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.ALTIN.durum == "up" : false} currencyName="ALTIN"/>
                    <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.IMKB.deger} deltaValue={"%" + currencyData.IMKB.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.IMKB.durum == "up" : false} currencyName="IMKB"/>
                </View>
                <View style={styles.subcontainer}>
                    <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.BIST.deger} deltaValue={"%" + currencyData.BIST.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.BIST.durum == "up" : false} currencyName="BIST"/>
                    <CurrencyItem icon="currency-pound" currentValue={currencyData.STERLIN.deger} deltaValue={"%" + currencyData.STERLIN.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.STERLIN.durum == "up" : false} currencyName="STERLIN"/>
                    <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.BTC.deger} deltaValue={"%" + currencyData.BTC.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.BTC.durum == "up" : false} currencyName="BITCOIN"/>
                    <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.ETH.deger} deltaValue={"%" + currencyData.ETH.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.ETH.durum == "up" : false} currencyName="ETH"/>
                </View>
            </>
        );
    }
    return(
        <LinearGradient colors={["#541B8B", "#14035C"]} style={styles.rootContainer}>
            { content }
        </LinearGradient>
    );
}

export default CurrencyAll;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 16,
    },
    subcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12,
    },
});