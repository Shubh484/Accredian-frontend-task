import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PageNavigation from "./components/PageNavigation/PageNavigation";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <NavigationBar />
        <PageNavigation />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
