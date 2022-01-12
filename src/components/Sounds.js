import React from "react";
import styled from "styled-components";
import { soundData } from "../soundData";
import Sound from "./Sound";

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
            icon={sound.icon}
          />
        );
      })}
    </>
  );
}
