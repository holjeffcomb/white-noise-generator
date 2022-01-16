import React from "react";
import styled from "styled-components";
import { soundData } from "../soundData";
import Sound from "./Sound";

const SoundStyle = styled.div`
  display: grid;
  margin: auto;
  align: center;
  width: 120px;
  grid-template-columns: 5;
  border: solid 1px black;
`;

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
            iconActive={sound.iconActive}
            iconInactive={sound.iconInactive}
          />
        );
      })}
    </>
  );
}
