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
        adMobIosBannerID: API_data.mobile_app_ios_banner,
        adMobAndroidBannerID: API_data.mobile_app_android_banner,
        adMobIosInterstitialID: API_data.mobile_app_ios_interstitial,
        adMobAndroidInterstitialID: API_data.mobile_app_android_interstitial,
        tvStreamLink: API_data.tv_link,
        radioStreamLink: API_data.fm_link,
        footerShortDescription: API_data.app_footer_description,
        breakingNewsModule: true ? API_data.mobile_app_son_dakika == "true" : false, // "true" veya "false"
        biographyModule: "", // "true" veya "false"
        interviewModule: "", // "true" veya "false"
        quintipleCuffsModule: true, // "true" veya "false"
        dailyCuffsModule: true, // "true" veya "false"
        highlightedNewsModule: true, // "true" veya "false"
        localNewsModule: true, // "true" veya "false"
        trendNewsModule: true, // "true" veya "false"
        tabbedNewsModule: "", // "true" veya "false"
        prayerTimesModule: "", // "true" veya "false"
        topCuffsModule: "", // "true" veya "false"
        mainCuffTitles: "", // "true" veya "false"
        categoryCuffTitles: "", // "true" veya "false"
        authorsModule: "", // "true" veya "false"
        weatherModule: "", // "true" veya "false"
        marketsModule: "", // "true" veya "false"
        videosModule: "", // "true" veya "false"
        galleriesModule: "", // "true" veya "false"
        leagueScoreStatusModule: "", // "true" veya "false"
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