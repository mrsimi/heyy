export type SoundtrackKey = "beginning" | "middle" | "ending";

export const soundtrack: Record<SoundtrackKey, {
  title: string;
  artist: string;
  url: string;
  source: string;
  license: string;
  attribution: string;
  volume: number;
}> = {
  beginning: {
    title: "Carefree",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3",
    source: "https://incompetech.com/music/royalty-free/index.html?gt=&isrc=USUAN1400037",
    license: "CC BY 4.0",
    attribution: '"Carefree" Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 4.0 License\nhttp://creativecommons.org/licenses/by/4.0/',
    volume: 0.2,
  },
  middle: {
    title: "Autumn Day",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Autumn%20Day.mp3",
    source: "https://incompetech.com/music/royalty-free/index.html?Search=Search&isrc=USUAN1100765",
    license: "CC BY 4.0",
    attribution: '"Autumn Day" Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 4.0 License\nhttp://creativecommons.org/licenses/by/4.0/',
    volume: 0.17,
  },
  ending: {
    title: "Heartwarming",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Heartwarming.mp3",
    source: "https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100207",
    license: "CC BY 4.0",
    attribution: '"Heartwarming" Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 4.0 License\nhttp://creativecommons.org/licenses/by/4.0/',
    volume: 0.18,
  },
};

export const sceneSoundtrack: Record<string, SoundtrackKey> = {
  "scene-one": "beginning",
  "scene-two": "beginning",
  "scene-three": "middle",
  "scene-four": "middle",
  "scene-five": "ending",
  "final-scene": "ending",
};
