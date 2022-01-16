import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Player } from "tone";
import Slider from "@mui/material/Slider";

const FrameStyle = styled.div`
  margin: auto;
  max-width: 120px;
  border: none;
  padding: 10px;
`;

const IconStyle = styled.input`
  max-width: 120px;
`;

export default function Sound({
  name,
  source,
  min,
  max,
  iconActive,
  iconInactive,
}) {
  const player = new Player(source).toDestination();
  const playerRef = useRef(player);
  const [volume, setVolume] = useState(max - 5);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    playerRef.current.loop = true;
    playerRef.current.volume.value = volume;
  });

  const play = () => {
    playerRef.current.start();
    setIsPlaying(true);
  };

  const stop = () => {
    playerRef.current.stop();
    setIsPlaying(false);
  };

  const changeVolume = (event) => {
    setVolume(event);
  };

  return (
    <FrameStyle>
      <IconStyle
        type="image"
        src={isPlaying ? iconActive : iconInactive}
        alt={name}
        onClick={isPlaying ? stop : play}
      />
      <Slider
        aria-label="Temperature"
        defaultValue={volume}
        getAriaValueText={changeVolume}
        valueLabelDisplay="auto"
        step={1}
        min={min}
        max={max}
      />
    </FrameStyle>
  );
}
