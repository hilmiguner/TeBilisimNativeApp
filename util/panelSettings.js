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
        biographyModule: true ? API_data.mobile_app_biography == "true" : false, // "true" veya "false"
        interviewModule: true ? API_data.mobile_app_interview == "true" : false, // "true" veya "false"
        quintipleCuffsModule: true ? API_data.mobile_app_five_headline == "true" : false, // "true" veya "false"
        dailyCuffsModule: true ? API_data.mobile_app_daily_headline == "true" : false, // "true" veya "false"
        highlightedNewsModule: true ? API_data.mobile_app_featured == "true" : false, // "true" veya "false"
        localNewsModule: true ? API_data.mobile_app_local_news == "true" : false, // "true" veya "false"
        trendNewsModule: true ? API_data.mobile_app_trend_news == "true" : false, // "true" veya "false"
        tabbedNewsModule: true ? API_data.mobile_app_tab_news == "true" : false, // "true" veya "false"
        prayerTimesModule: true ? API_data.mobile_app_prayer_times == "true" : false, // "true" veya "false"
        topCuffsModule: true ? API_data.mobile_app_ust_mansetler == "true" : false, // "true" veya "false"
        mainCuffTitles: true ? API_data.mobile_app_ana_mansetler_baslik == "true" : false, // "true" veya "false"
        categoryCuffTitles: true ? API_data.mobile_app_kategori_mansetler_baslik == "true" : false, // "true" veya "false"
        authorsModule: true ? API_data.mobile_app_anasayfa_yazarlar == "true" : false, // "true" veya "false"
        weatherModule: true ? API_data.mobile_app_havadurumu == "true" : false, // "true" veya "false"
        marketsModule: true ? API_data.mobile_app_piyasalar == "true" : false, // "true" veya "false"
        videosModule: true ? API_data.mobile_app_anasayfa_videolar == "true" : false, // "true" veya "false"
        galleriesModule: true ? API_data.mobile_app_anasayfa_galeriler == "true" : false, // "true" veya "false"
        leagueScoreStatusModule: true ? API_data.mobile_app_puandurumu == "true" : false, // "true" veya "false"
        authorsDirectionType: API_data.mobile_app_anasayfa_yazarlar_tipi, // "vertical" veya "horizontal"
        videosDirectionType: API_data.mobile_app_anasayfa_videolar_tipi, // "vertical" veya "horizontal"
        galleriesDirectionType: API_data.mobile_app_anasayfa_galeriler_tipi, // "vertical" veya "horizontal"
        highlightedNewsDirectionType: API_data.mobile_app_onecikanlar_tipi, // "vertical" veya "horizontal"
        weatherAndMarketsDirectionType: API_data.mobile_app_hava_durumu_piyasalar_tipi, // "vertical" veya "horizontal"
        otherNewsViewType: API_data.mobile_app_diger_haberler_tipi, // "custom" veya "flat"
        detailFontSize: API_data.font_size, // Sayı
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