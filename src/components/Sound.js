import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Player } from "tone";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

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

  // prevent arrow left/right keys from changing slider volumes
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ height: 120, padding: 5 }}>
      {/* add icon */}
      <IconStyle
        type="image"
        src={isPlaying ? iconActive : iconInactive}
        alt={name}
        onClick={isPlaying ? stop : play}
      />
      {/* add slider */}
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        value={volume}
        aria-label="Temperature"
        onChange={(event, value) => changeVolume(value)}
        onKeyDown={preventHorizontalKeyboardNavigation}
        min={min}
        max={max}
      />
    </Box>
  );
}
