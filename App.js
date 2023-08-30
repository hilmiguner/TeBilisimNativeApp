// Drawer Paketi için Gerekli Paket
import 'react-native-gesture-handler';

// Context
import ContextProvider from "./store/context";

// Oluşturulan Öğeler
import MainContent from "./MainContent";

function App() {
  return(
    <ContextProvider>
      <MainContent />
    </ContextProvider>
  );
}

export default App;