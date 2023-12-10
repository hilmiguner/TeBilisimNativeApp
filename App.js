// Drawer Paketi için Gerekli Paket
import 'react-native-gesture-handler';

// Context
import ContextProvider from "./store/context";

// Oluşturulan Öğeler
import MainContent from "./MainContent";

import mobileAds from "react-native-google-mobile-ads";

function App() {
  mobileAds().initialize().then(adapterStatuses => {});
  return(
    <ContextProvider>
      <MainContent />
    </ContextProvider>
  );
}

export default App;