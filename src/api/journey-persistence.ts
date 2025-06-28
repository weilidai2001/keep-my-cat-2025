import { StateKey } from "@/data/states";

const JOURNEY_KEY = "journey";

export const addToJourney = (stateId: StateKey): StateKey[] => {
  const journey = getJourney();
  // Optionally, avoid duplicates:
  if (!journey.includes(stateId)) {
    journey.push(stateId);
    sessionStorage.setItem(JOURNEY_KEY, JSON.stringify(journey));
  }
  return journey;
};

export const getJourney = (): StateKey[] => {
  const stored = sessionStorage.getItem(JOURNEY_KEY);
  if (stored !== null) {
    try {
      return JSON.parse(stored) as StateKey[];
    } catch {
      return [];
    }
  }
  return [];
};

export const resetJourney = (): void => {
  sessionStorage.removeItem(JOURNEY_KEY);
};
