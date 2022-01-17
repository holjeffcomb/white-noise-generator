import Header from "./components/Header";
import Sounds from "./components/Sounds";
import Footer from "./components/Footer";
import Lottie from "lottie-react";
import RainAnimation from "./assets/animations/rain-animation.json";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <div className="App">
        <Header />
        <Lottie
          loop={true}
          autoplay={true}
          animationData={RainAnimation}
          style={{ height: 200 }}
        />
        <Sounds />
        <Footer />
      </div>
    </>
  );
}

export default App;
