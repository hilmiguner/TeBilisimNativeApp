function setSettings(API_data) {
    PanelSettings = {
        oneSignalAppID: API_data.mobile_onesignal_app_id,
        oneSignalAPI_Key: "",
        iosStatusBarContentColor: API_data.mobile_app_ios_status_bar == "white" ? "light-content" : "dark-content", // "Beyaz" veya "Siyah"
        headerAndStatusBarBG_Color: API_data.mobile_app_bar_style_color, // Renk
        menuTextColor: API_data.mobile_app_menu_font_color, // Renk
        headerTextColor: API_data.mobile_app_bar_font_color, // Renk
        menuBG_Color: API_data.mobile_app_menu_style_color, // Renk
        themePrimaryColor: API_data.primary_color, // Renk
        moduleTitleTextColor: API_data.title_font_color, // Renk
        detailTextColor: API_data.font_color, // Renk
        adMobIosBannerID: "",
        adMobAndroidBannerID: "",
        adMobIosInterstitialID: "",
        adMobAndroidInterstitialID: "",
        tvStreamLink: "",
        radioStreamLink: "",
        footerShortDescription: "Türkiye'nin en büyük haber sitesi, en kaliteli ve güncel haberleriyle artık karşınızda!",
        breakingNewsModule: true, // "Açık" veya "Kapalı"
        biographyModule: "", // "Açık" veya "Kapalı"
        interviewModule: "", // "Açık" veya "Kapalı"
        quintipleCuffsModule: true, // "Açık" veya "Kapalı"
        dailyCuffsModule: true, // "Açık" veya "Kapalı"
        highlightedNewsModule: true, // "Açık" veya "Kapalı"
        localNewsModule: true, // "Açık" veya "Kapalı"
        trendNewsModule: true, // "Açık" veya "Kapalı"
        tabbedNewsModule: "", // "Açık" veya "Kapalı"
        prayerTimesModule: "", // "Açık" veya "Kapalı"
        topCuffsModule: "", // "Açık" veya "Kapalı"
        mainCuffTitles: "", // "Açık" veya "Kapalı"
        categoryCuffTitles: "", // "Açık" veya "Kapalı"
        authorsModule: "", // "Açık" veya "Kapalı"
        weatherModule: "", // "Açık" veya "Kapalı"
        marketsModule: "", // "Açık" veya "Kapalı"
        videosModule: "", // "Açık" veya "Kapalı"
        galleriesModule: "", // "Açık" veya "Kapalı"
        leagueScoreStatusModule: "", // "Açık" veya "Kapalı"
        authorsDirectionType: "", // "Dikey" veya "Yatay"
        videosDirectionType: "", // "Dikey" veya "Yatay"
        galleriesDirectionType: "", // "Dikey" veya "Yatay"
        highlightedNewsDirectionType: "", // "Dikey" veya "Yatay"
        weatherAndMarketsDirectionType: "", // "Dikey" veya "Yatay"
        otherNewsViewType: "", // "Özel" veya "Düz"
        detailFontSize: "", // Sayı
        primaryFontFamily: "", // Font Family (sadece detaylar ve spot)
        secondaryFontFamily: "", // Font Family (modül ve detay başlıkları)
        cuffImageHeight: "", // Sayı
        cuffImageRatio: "", // Sayı
        detailTitleFontSize: "", // Sayı
        mainPageCategoryIDs: "", // Dizi (Örneğin '1,4,5,123,5')
        app_adsContentCode: "",
        mainCuffLimit: "", // Sayı
    };

    return PanelSettings;
}

export default setSettings;