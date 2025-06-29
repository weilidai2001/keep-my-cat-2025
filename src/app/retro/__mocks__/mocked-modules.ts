// Manual mocks for Storybook stories to use in place of jest.mock

export function getJourney() {
  // Example: return visited state IDs
  return [1, 2, 3];
}

export function getMissionStatesWithImages(visitedStates: number[]) {
  return [
    {
      heroImageUrl: "https://placekitten.com/200/200",
      retro: "This is a retro for state 1",
      visited: true,
    },
    {
      heroImageUrl: "https://placekitten.com/201/200",
      retro: "This is a retro for state 2",
      visited: true,
    },
    {
      heroImageUrl: "https://placekitten.com/202/200",
      retro: "This is a retro for state 3",
      visited: false,
    },
  ];
}
