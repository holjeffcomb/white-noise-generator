import React from "react";
import styled from "styled-components";
import { soundData } from "../soundData";
import Sound from "./Sound";

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

const SoundStyle = styled.div``;

export default function Sounds() {
  return (
    <>
      {soundData.map((sound, index) => {
        return (
          <Sound
            name={sound.name}
            source={sound.source}
            min={sound.min}
            max={sound.max}
            key={index}
          />
        );
      })}
    </>
  );
}
