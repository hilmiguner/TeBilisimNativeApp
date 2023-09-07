// React Native Temel Paketler
import { ScrollView, ActivityIndicator } from "react-native";

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

function CurrencySlider() {
    const [currencyData, setCurrencyData] = useState();

    useEffect(() => {
        newsApi.getCurrency().then((apiData) => setCurrencyData(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(currencyData) {
        content = (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CurrencyItem icon="attach-money" currentValue={currencyData.DOLAR.deger} deltaValue={"%" + currencyData.DOLAR.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.DOLAR.durum == "up" : false} currencyName="DOLAR" style={{ margin: 16 }}/>
                <CurrencyItem icon="euro" currentValue={currencyData.EURO.deger} deltaValue={"%" + currencyData.EURO.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.EURO.durum == "up" : false} currencyName="EURO" style={{ margin: 16 }}/>
                <CurrencyItem icon="diamond" currentValue={currencyData.ALTIN.deger} deltaValue={"%" + currencyData.ALTIN.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.ALTIN.durum == "up" : false} currencyName="ALTIN" style={{ margin: 16 }}/>
                <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.IMKB.deger} deltaValue={"%" + currencyData.IMKB.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.IMKB.durum == "up" : false} currencyName="IMKB" style={{ margin: 16 }}/>
                <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.BIST.deger} deltaValue={"%" + currencyData.BIST.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.BIST.durum == "up" : false} currencyName="BIST" style={{ margin: 16 }}/>
                <CurrencyItem icon="currency-pound" currentValue={currencyData.STERLIN.deger} deltaValue={"%" + currencyData.STERLIN.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.STERLIN.durum == "up" : false} currencyName="STERLIN" style={{ margin: 16 }}/>
                <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.BTC.deger} deltaValue={"%" + currencyData.BTC.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.BTC.durum == "up" : false} currencyName="BITCOIN" style={{ margin: 16 }}/>
                <CurrencyItem icon="currency-bitcoin" currentValue={currencyData.ETH.deger} deltaValue={"%" + currencyData.ETH.degisim} size={20} color={AppColors.yellow} isIncreasing={true ? currencyData.ETH.durum == "up" : false} currencyName="ETH" style={{ margin: 16 }}/>
            </ScrollView>
        );
    }

    return(
        <LinearGradient colors={["#541B8B", "#14035C"]}>
            { content }
        </LinearGradient>
    );
}

export default CurrencySlider;