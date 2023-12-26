// Drawer Paketi için Gerekli Paket
import 'react-native-gesture-handler';

// Context
import ContextProvider from "./store/context";

// Oluşturulan Öğeler
import MainContent from "./MainContent";

import mobileAds from "react-native-google-mobile-ads";

import { useNetInfoInstance } from "@react-native-community/netinfo";

import { Alert, BackHandler } from 'react-native';

function App() {
  mobileAds().initialize().then(adapterStatuses => {});
  const { netInfo: { type, isConnected }, refresh } = useNetInfoInstance();
  if(isConnected == false) {
    Alert.alert("İnternet Hatası", "İnternete bağlı gözükmüyorsunuz, lütfen internet bağlantınız ile birlikte uygulamayı tekrar açın", [
      {
        text: "Tamam",
        onPress: () => BackHandler.exitApp()
      }
    ]);
  }
  return(
    <ContextProvider>
      <MainContent />
    </ContextProvider>
  );
}

export default App;