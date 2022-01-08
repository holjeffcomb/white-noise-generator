import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Player } from "tone";
import rain from "../assets/audio/ES_Rain Downpour 2 - SFX Producer.mp3";
import thunder from "../assets/audio/ES_Thunder Rumble - SFX Producer.mp3";
import wind from "../assets/audio/ES_Wind Storm 8 - SFX Producer.mp3";
import crickets from "../assets/audio/crickets.mp3";
import rainVid from "../assets/video/rain-vid.mp4";

const VideoStyle = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 70%;
`;

const rainPlayer = new Player(rain).toDestination();
const thunderPlayer = new Player(thunder).toDestination();
const windPlayer = new Player(wind).toDestination();
const cricketsPlayer = new Player(crickets).toDestination();

export default function Sounds() {
  const playerRef = useRef(rainPlayer);
  const thunderRef = useRef(thunderPlayer);
  const windRef = useRef(windPlayer);
  const cricketsRef = useRef(cricketsPlayer);

  const [rainVolume, setRainVolume] = useState(0);
  const [thunderVolume, setThunderVolume] = useState(0);
  const [windVolume, setWindVolume] = useState(0);
  const [cricketsVolume, setCricketsVolume] = useState(0);

  const playRain = () => {
    playerRef.current.start();
  };

  const playThunder = () => {
    thunderRef.current.start();
  };

  const playWind = () => {
    windRef.current.start();
  };

  const playCrickets = () => {
    cricketsRef.current.start();
  };

  const stopRain = () => {
    playerRef.current.stop();
  };

  const stopThunder = () => {
    thunderRef.current.stop();
  };

  const stopWind = () => {
    windRef.current.stop();
  };

  const stopCrickets = () => {
    cricketsRef.current.stop();
  };

  useEffect(() => {
    playerRef.current.loop = true;
    thunderRef.current.loop = true;
    windRef.current.loop = true;
    cricketsRef.current.loop = true;
    playerRef.current.volume.value = rainVolume;
    thunderRef.current.volume.value = thunderVolume;
    windRef.current.volume.value = windVolume;
    cricketsRef.current.volume.value = cricketsVolume;
  }, [rainVolume, thunderVolume, windVolume, cricketsVolume]);

  const changeRainVolume = (event) => {
    setRainVolume(event.target.value);
  };

  const changeThunderVolume = (event) => {
    setThunderVolume(event.target.value);
  };

  const changeWindVolume = (event) => {
    setWindVolume(event.target.value);
  };

  const changeCricketsVolume = (event) => {
    setCricketsVolume(event.target.value);
  };

  return (
    <>
      <VideoStyle autoPlay loop muted>
        <source src={rainVid} type="video/mp4" />
      </VideoStyle>

      <div className="rain">
        <button onClick={playRain}>Play</button>
        <button onClick={stopRain}>Stop</button>
        <input
          type="range"
          value={rainVolume}
          onChange={changeRainVolume}
          min={-20}
          max={10}
        />
      </div>
      <div className="thunder">
        <button onClick={playThunder}>Play</button>
        <button onClick={stopThunder}>Stop</button>
        <input
          type="range"
          value={thunderVolume}
          onChange={changeThunderVolume}
          min={-20}
          max={10}
        />
      </div>
      <div className="wind">
        <button onClick={playWind}>Play</button>
        <button onClick={stopWind}>Stop</button>
        <input
          type="range"
          value={windVolume}
          onChange={changeWindVolume}
          min={-20}
          max={10}
        />
      </div>
      <div className="crickets">
        <button onClick={playCrickets}>Play</button>
        <button onClick={stopCrickets}>Stop</button>
        <input
          type="range"
          value={cricketsVolume}
          onChange={changeCricketsVolume}
          min={-20}
          max={10}
        />
      </div>
    </>
  );
}
