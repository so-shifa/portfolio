import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/NavBar";
import AppRouter from "./router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-black dark:text-light-bg">
        <ScrollToTop />
        <Navbar />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
