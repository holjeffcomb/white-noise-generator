import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sounds from "./components/Sounds";

styled.video``;

function App() {
  return (
    <div className="App">
      <Header />
      <Sounds />
      <p>I am the app</p>
    </div>
  );
}

export default App;
