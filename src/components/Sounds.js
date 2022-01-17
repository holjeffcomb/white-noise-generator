import React from "react";
import styled from "styled-components";
import { soundData } from "../soundData";
import Sound from "./Sound";

const SoundStyle = styled.div`
  display: grid;
  margin: auto;
  align: center;
  width: 50%;
  grid-template-columns: auto auto auto auto;
`;

export default function Sounds() {
  return (
    <>
      <SoundStyle>
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
      </SoundStyle>
    </>
  );
}
