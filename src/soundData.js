// import audio clips
import rain from "./assets/audio/ES_Rain Downpour 2 - SFX Producer.mp3";
import thunder from "./assets/audio/ES_Thunder Rumble - SFX Producer.mp3";
import wind from "./assets/audio/ES_Wind Storm 8 - SFX Producer.mp3";
import crickets from "./assets/audio/crickets.mp3";

// import icons
import rainIconActive from "./assets/icons/rain-button-active.svg";
import rainIconInactive from "./assets/icons/rain-button-inactive.svg";
import thunderIconActive from "./assets/icons/thunder-button-active.svg";
import thunderIconInactive from "./assets/icons/thunder-button-inactive.svg";
import windIconActive from "./assets/icons/wind-button-active.svg";
import windIconInactive from "./assets/icons/wind-button-inactive.svg";
import nightIconActive from "./assets/icons/moon-button-active.svg";
import nightIconInactive from "./assets/icons/moon-button-inactive.svg";

export const soundData = [
  {
    name: "Rain",
    source: rain,
    min: -20,
    max: 0,
    iconActive: rainIconActive,
    iconInactive: rainIconInactive,
  },
  {
    name: "Thunder",
    source: thunder,
    min: -20,
    max: 0,
    iconActive: thunderIconActive,
    iconInactive: thunderIconInactive,
  },
  {
    name: "Wind",
    source: wind,
    min: -20,
    max: 0,
    iconActive: windIconActive,
    iconInactive: windIconInactive,
  },
  {
    name: "Crickets",
    source: crickets,
    min: -30,
    max: -10,
    iconActive: nightIconActive,
    iconInactive: nightIconInactive,
  },
];
