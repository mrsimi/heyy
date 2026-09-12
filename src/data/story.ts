export const sceneOneMessages = [
  "What are you doing this weekend?",
  "Any plans this weekend?",
  "What are you up to this weekend?",
];

export const sceneOneCopy = {
  opening: "I still don't know why I kept asking you about your weekend plans.",
  reflection: "I kept coming back to ask.",
  glad: "I'm glad I did.",
  thought: "Because at some point I thought...",
  restaurant: "Idara would love this.",
  ending: "That didn't work out.",
};

export const sceneTwoCopy = {
  opening: "The first 'date' we had was makeup shopping.",
  lesson: "Now I know the difference between contour and bronzer.",
  awkward: "There is no reason for me to be in a makeup shop.",
  adventures: "But even in that moment, I knew you'd be full of adventures.",
  ending: "And that's just the start of it.",
};

export const sceneThreeCopy = {
  opening: "The next time we went out together was for something we both love — the cinemas.",
  film: "And apart from The Odyssey being the best film I've seen this year...",
  realization: "it also made me realize...",
  ending: "you're someone I want to do everything else with.",
};

export const beninSceneCopy = {
  trip: "The trip to Benin Republic was great...",
  wonderful: "and I got to spend time with the most wonderful woman.",
  disbelief: "I still can't believe...",
  together: "we got on a bike together",
  expressway: "on the expressway.",
};

export const cinemaTime = {
  cinemaMoment: "2026-07-17T20:10:00+01:00",
  referenceMoment: "2026-09-12T15:00:00+01:00",
};

const elapsedMilliseconds = new Date(cinemaTime.referenceMoment).getTime() - new Date(cinemaTime.cinemaMoment).getTime();
const elapsedMinutes = Math.floor(elapsedMilliseconds / 60_000);

export const cinemaElapsed = {
  days: Math.floor(elapsedMinutes / 1_440),
  hours: Math.floor((elapsedMinutes % 1_440) / 60),
  minutes: elapsedMinutes % 60,
};

export const sceneFourCopy = {
  opening: "It has been 56 days, 18 hours and 50 minutes...",
  reference: "...if you see this at exactly 3PM today...",
  since: "since we sat in that cinema.",
  ending: "And it is one of the best decisions I've ever made.",
};

export const sceneFiveCopy = {
  opening: "I'm torn between what I prefer the most...",
  watching: "watching you do random cute things,",
  photos: "taking your photos,",
  talking: "or listening to you talk—",
  ending: "but I guess I have all the time to figure that out, together with you.",
};

export const finalSceneCopy = {
  somehow: "And somehow...",
  beginning: "all of this started because I wouldn't stop asking about your weekend.",
  glad: "I'm very glad I didn't stop.",
  next: "And I'm even happier that I get to find out what happens next.",
  withYou: "With you.",
  adventures: "more adventures?",
};
