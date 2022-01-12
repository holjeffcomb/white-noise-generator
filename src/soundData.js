import rain from "./assets/audio/ES_Rain Downpour 2 - SFX Producer.mp3";
import thunder from "./assets/audio/ES_Thunder Rumble - SFX Producer.mp3";
import wind from "./assets/audio/ES_Wind Storm 8 - SFX Producer.mp3";
import crickets from "./assets/audio/crickets.mp3";

import rainIcon from "./assets/icons/rain.svg";
import thunderIcon from "./assets/icons/thunder.svg";
import windIcon from "./assets/icons/wind.svg";
import nightIcon from "./assets/icons/moon.svg";

export const soundData = [
  {
    name: "Rain",
    source: rain,
    min: -20,
    max: 0,
    icon: rainIcon,
  },
  {
    name: "Thunder",
    source: thunder,
    min: -20,
    max: 0,
    icon: thunderIcon,
  },
  {
    name: "Wind",
    source: wind,
    min: -20,
    max: 0,
    icon: windIcon,
  },
  {
    name: "Crickets",
    source: crickets,
    min: -30,
    max: -10,
    icon: nightIcon,
  },
];
