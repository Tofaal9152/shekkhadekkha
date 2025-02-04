import { ThemeProvider } from "./components/ui/theme-provider";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <Home/>
    </ThemeProvider>
  );
};

export default App;
