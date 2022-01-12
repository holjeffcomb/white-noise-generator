import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sounds from "./components/Sounds";
import cloud from "./assets/icons/base-cloud.svg";

const GlobalStyles = styled.div`
  input[type="range"] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;

const ImageStyle = styled.img`
  height: 550px;
  width: 440px;
`;

function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Header />
        <ImageStyle src={cloud} alt="cloud" />
        <Sounds />
        <p>I am the app</p>
      </div>
    </GlobalStyles>
  );
}

export default App;
