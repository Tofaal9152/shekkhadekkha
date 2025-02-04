import { ThemeProvider } from "./components/ui/theme-provider";
import Video from "./pages/Video";
// import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <Home/> */}
      <Video />
    </ThemeProvider>
  );
};

export default App;
