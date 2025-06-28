export interface StateChoice {
  destination: string;
  text: string;
  displayOnDashboard?: boolean;
}

export interface MissionState {
  heroImageUrl?: string;
  animation: "jackInTheBox" | "zoomIn" | "slide" | "flip";
  script?: string;
  destination?: string;
  retro?: string;
  reward?: number;
  isFinalMission?: boolean;
  minimumBalance?: number;
  choice1?: StateChoice;
  choice2?: StateChoice;
  tileId?: number;
  displayOnDashboard?: boolean;
}

export type States = Record<StateKey, MissionState>;

export const states = {
  intro1: {
    heroImageUrl: "/intro_1.gif",
    animation: "slide",
    choice1: {
      destination: "intro2",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro2: {
    heroImageUrl: "/intro_2.gif",
    animation: "slide",
    choice1: {
      destination: "intro3",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro3: {
    heroImageUrl: "/intro_3.gif",
    animation: "slide",
    choice1: {
      destination: "intro4",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro4: {
    heroImageUrl: "/intro_4.gif",
    animation: "slide",
    choice1: {
      destination: "intro5",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro5: {
    heroImageUrl: "/intro_5.gif",
    animation: "slide",
    choice1: {
      destination: "intro6",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro6: {
    heroImageUrl: "/intro_6.gif",
    animation: "slide",
    choice1: {
      destination: "intro7",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro7: {
    heroImageUrl: "/intro_7.gif",
    animation: "slide",
    choice1: {
      destination: "intro8",
      text: "Continue",
    },
    choice2: {
      destination: "mission_b0m1",
      text: "Skip intro",
    },
  },
  intro8: {
    heroImageUrl: "/intro_8.gif",
    animation: "slide",
    choice1: {
      destination: "mission_b0m1",
      text: "Start game",
    },
  },
  won: {
    heroImageUrl: "/win.gif",
    animation: "zoomIn",
    script: "You win!",
    choice1: {
      destination: "/retro",
      text: "Continue",
    },
  },
  lost: {
    heroImageUrl: "/lose.gif",
    animation: "zoomIn",
    script: "You lose!",
    choice1: {
      destination: "/retro",
      text: "Continue",
    },
  },
  mission_b0m1: {
    displayOnDashboard: true,
    tileId: 34,
    heroImageUrl: "/mission_b0m1.jpg",
    animation: "jackInTheBox",
    script:
      "Do you want to become a drone engineer again? It will take a few weeks to retrain yourself though.",
    choice1: {
      destination: "mission_b0m1a1",
      text: "Yes, why not?",
    },
    choice2: {
      destination: "mission_b0m1a2",
      text: "No, it takes too long.",
    },
  },
  mission_b0m1a1: {
    heroImageUrl: "/mission_b0m1a1.jpg",
    animation: "jackInTheBox",
    retro:
      "In 2037, STEM subjects will become even more important than they are now. People are much more likely to find jobs if they have skills in those areas.",
    script:
      "You have gone back to your old job. You have 2 missions left to win the game. <br/>+£3,500",
    choice1: {
      destination: "mission_b4m2",
      text: "Continue",
    },
    reward: 3500,
  },
  mission_b0m1a2: {
    heroImageUrl: "/mission_b0m1a2.jpg",
    animation: "jackInTheBox",
    retro:
      "STEM subjects will continue to be highly employable in 2037. But it doesn't mean other jobs will completely disappear.",
    script: "No worries, you still have 5 more missions to go. <br/>+£0",
    choice1: {
      destination: "mission_b1m2",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b4m2: {
    displayOnDashboard: true,
    tileId: 31,
    heroImageUrl: "/mission_b4m2.jpg",
    animation: "jackInTheBox",
    retro:
      "Digital nomads, people who enjoy a nomadic lifestyle working remotely from anywhere in the world, will become much more common in 2037. It is a great way to reduce living costs while getting the same salary.",
    script: "Fancy living abroad?",
    choice1: {
      destination: "mission_b4m2a1",
      text: "Sounds fun!",
    },
    choice2: {
      destination: "mission_b4m2a2",
      text: "I'm not leaving home.",
    },
  },
  mission_b4m2a1: {
    heroImageUrl: "/mission_b4m2a1.jpg",
    animation: "jackInTheBox",
    retro:
      "Digital nomads, people who enjoy a nomadic lifestyle working remotely from anywhere in the world, will become much more common in 2037. It is a great way to reduce living costs while getting the same salary.",
    script: "You have saved money by living somewhere cheaper. <br/>+£1,500",
    choice1: {
      destination: "won",
      text: "Continue",
    },
    reward: 1500,
  },
  mission_b4m2a2: {
    heroImageUrl: "/mission_b4m2a2.jpg",
    animation: "jackInTheBox",
    retro:
      "In the future, a lot people may travel to cheaper countries to live while still working for the same employer remotely. But for those who choose to stay, it is still possible to enjoy life.",
    script:
      "Loving the British weather too much? That’s ok. There are other things to try…<br/>+£0",
    choice1: {
      destination: "mission_b4m3",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b4m3: {
    displayOnDashboard: true,
    tileId: 61,
    heroImageUrl: "/mission_b4m3.jpg",
    animation: "jackInTheBox",
    script:
      "Today is Sunday. Your neighbour's kids seem to want to play with you.",
    choice1: {
      destination: "mission_b4m3a1",
      text: "Host a workshop for them",
    },
    choice2: {
      destination: "mission_b4m3a2",
      text: "I'd rather be alone!",
    },
  },
  mission_b4m3a1: {
    heroImageUrl: "/mission_b4m3a1.jpg",
    animation: "jackInTheBox",
    retro:
      "In 2037, contributing to the community is very encouraged. The government may start to pay salary for such work especially if other kinds of jobs have been taken by the machine.",
    script: "The local council appreciates your kind work. <br/>+£2,000",
    choice1: {
      destination: "won",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b4m3a2: {
    heroImageUrl: "/mission_b4m3a2.jpg",
    animation: "jackInTheBox",
    retro: "If you don't contribute, you aren't rewarded…",
    script: "One step closer to becoming the smartest guy…<br/>+£0",
    choice1: {
      destination: "lost",
      text: "Continue",
    },
    reward: 0,
    isFinalMission: true,
  },
  mission_b1m2: {
    displayOnDashboard: true,
    tileId: 64,
    heroImageUrl: "/mission_b1m2.jpg",
    animation: "jackInTheBox",
    script: "Fancy living abroad?",
    choice1: {
      destination: "mission_b1m2a1",
      text: "Sounds fun!",
    },
    choice2: {
      destination: "mission_b1m2a2",
      text: "I'm not leaving my home.",
    },
  },
  mission_b1m2a1: {
    heroImageUrl: "/mission_b4m2a1.jpg",
    animation: "jackInTheBox",
    retro:
      "Digital nomads, people who enjoy a nomadic lifestyle working remotely from anywhere in the world, will become much more common in 2037. It is a great way to reduce living costs while getting the same salary.",
    script: "You have saved money by living in somewhere cheaper. <br/>+£1,500",
    choice1: {
      destination: "mission_b2m3",
      text: "Continue",
    },
    reward: 1500,
  },
  mission_b1m2a2: {
    heroImageUrl: "/mission_b4m2a2.jpg",
    animation: "jackInTheBox",
    retro:
      "In the future, a lot people may travel to cheaper countries to live while still working for the same employer remotely. But for those who choose to stay, it is still possible to enjoy life.",
    script:
      "Loving the British weather too much? That’s ok. There are other things to try…<br/>+£0",
    choice1: {
      destination: "mission_b3m3",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b2m3: {
    displayOnDashboard: true,
    tileId: 94,
    heroImageUrl: "/mission_b2m3.jpg",
    animation: "jackInTheBox",
    script: "You met a successful businessman",
    choice1: {
      destination: "mission_b2m3a1",
      text: "Apply to be his accountant",
    },
    choice2: {
      destination: "mission_b2m3a2",
      text: "Show him your sexy moves",
    },
  },
  mission_b2m3a1: {
    heroImageUrl: "/mission_b2m3a1.jpg",
    animation: "jackInTheBox",
    retro:
      "Accountancy is one of the professions very likely to be taken by AI in the 2037.",
    script: "He prefers AI.<br/>+£0",
    choice1: {
      destination: "mission_b2m4",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b2m3a2: {
    heroImageUrl: "/mission_b2m3a2.jpg",
    animation: "jackInTheBox",
    retro:
      "The entertaining industry will still need human workers in the future.",
    script: "He likes it.<br/>+£2,000",
    choice1: {
      destination: "mission_b2m4",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b2m4: {
    displayOnDashboard: true,
    tileId: 97,
    heroImageUrl: "/mission_b2m4.jpg",
    animation: "jackInTheBox",
    script: "A maid café just opened.",
    choice1: {
      destination: "mission_b2m4a1",
      text: "I don’t mind waiting tables",
    },
    choice2: {
      destination: "mission_b2m4a2",
      text: "Sell yourself as a manager",
    },
  },
  mission_b2m4a1: {
    heroImageUrl: "/mission_b2m4a1.jpg",
    animation: "jackInTheBox",
    retro:
      "After 20 years, you may no longer see human staff in fast food restaurants. But places like the maid café will still hire waitresses because the dining experience is as important as the food served. ",
    script: "That was embarrassing but worth it!<br/>+£2,000",
    choice1: {
      destination: "mission_b2m5",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b2m4a2: {
    heroImageUrl: "/mission_b2m4a2.png",
    animation: "jackInTheBox",
    retro:
      "Artificial intelligence is capable of taking over the managing task in certain working environment. ",
    script: "Sorry, the place is managed perfectly by algorithms!<br/>+£0",
    choice1: {
      destination: "mission_b2m5",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b2m5: {
    displayOnDashboard: true,
    tileId: 100,
    heroImageUrl: "/mission_b2m5.jpg",
    animation: "jackInTheBox",
    script:
      "Today is Sunday. Your neighbour's kids seem to want to play with you.",
    choice1: {
      destination: "mission_b2m5a1",
      text: "Host a workshop for them",
    },
    choice2: {
      destination: "mission_b2m5a2",
      text: "I'd rather be alone!",
    },
  },
  mission_b2m5a1: {
    heroImageUrl: "/mission_b2m5a1.png",
    animation: "jackInTheBox",
    retro:
      "In 2037, contributing to the community is very encouraged. The government may start to pay salary for such work especially if other kinds of jobs have been taken by the machine.",
    script: "The local council appreciates your kind work<br/>+£2,000",
    choice1: {
      destination: "mission_b2m6",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b2m5a2: {
    heroImageUrl: "/mission_b2m5a2.jpg",
    animation: "jackInTheBox",
    retro: "If you don't contribute, you aren't rewarded…",
    script: "One step closer to becoming the smartest guy…<br/>+£0",
    choice1: {
      destination: "mission_b2m6",
      text: "Continue",
    },
    reward: 0,
    minimumBalance: 2999,
  },
  mission_b2m6: {
    displayOnDashboard: true,
    tileId: 70,
    heroImageUrl: "/mission_b2m6.1.png",
    animation: "slide",
    script: "A kid is looking for an adult to bring him back to the UK.",
    choice1: {
      destination: "mission_b2m6q2",
      text: "Continue",
    },
  },
  mission_b2m6q2: {
    heroImageUrl: "/mission_b2m6.2.png",
    animation: "slide",
    script: "",
    choice1: {
      destination: "mission_b2m6q3",
      text: "Continue",
    },
  },
  mission_b2m6q3: {
    heroImageUrl: "/mission_b2m6.3.png",
    animation: "slide",
    script: "",
    choice1: {
      destination: "mission_b2m6q3a1",
      text: "Love to help",
    },
    choice2: {
      destination: "mission_b2m6q3a2",
      text: "Say no",
    },
  },
  mission_b2m6q3a1: {
    heroImageUrl: "/mission_b2m6a1.png",
    animation: "slide",
    retro:
      "This boy is a second generation British expatriate, a child of digital nomads. Perhaps children like him would be quite common after 20 years.",
    script: "Everyone is happy now",
    choice1: {
      destination: "won",
      text: "Continue",
    },
    reward: 2000,
    isFinalMission: true,
  },
  mission_b2m6q3a2: {
    heroImageUrl: "/mission_b2m6a2.png",
    animation: "slide",
    script: "",
    choice1: {
      destination: "mission_b2m6q3",
      text: "Continue",
    },
  },
  mission_b3m3: {
    displayOnDashboard: true,
    tileId: 67,
    heroImageUrl: "/mission_b3m3.png",
    animation: "jackInTheBox",
    script: "A traveller wants to live with you for a while.",
    choice1: {
      destination: "mission_b3m3a1",
      text: "Sure, why not!",
    },
    choice2: {
      destination: "mission_b3m3a2",
      text: "Go away",
    },
  },
  mission_b3m3a1: {
    heroImageUrl: "/mission_b3m3a1.png",
    animation: "jackInTheBox",
    retro: "Co-living will become very common, especially in big cities.",
    script: "Here is your rent money. <br/>+£1,500",
    choice1: {
      destination: "mission_b3m4",
      text: "Continue",
    },
    reward: 1500,
  },
  mission_b3m3a2: {
    heroImageUrl: "/mission_b3m3a2.png",
    animation: "jackInTheBox",
    retro: "Co-living will become very common, especially in big cities.",
    script: "Hmm…<br/>+£0",
    choice1: {
      destination: "mission_b3m4",
      text: "Continue",
    },
    reward: 0,
  },
  mission_b3m4: {
    displayOnDashboard: true,
    tileId: 37,
    heroImageUrl: "/mission_b3m4.png",
    animation: "jackInTheBox",
    script: "This farmer keeps a lot of sheep.",
    choice1: {
      destination: "mission_b3m4a1",
      text: "Shear his sheep",
    },
    choice2: {
      destination: "mission_b3m4a2",
      text: "Play with the farmer",
    },
  },
  mission_b3m4a1: {
    heroImageUrl: "/mission_b3m4a1.png",
    animation: "jackInTheBox",
    retro: "Less labour will be involved in agriculture as machine advances",
    script: "The sheep prefers a machine than you…<br/>+£0",
    choice1: {
      destination: "mission_b3m5",
      text: "Continue",
    },
    reward: 0,
    minimumBalance: 999,
  },
  mission_b3m4a2: {
    heroImageUrl: "/mission_b3m4a2.png",
    animation: "jackInTheBox",
    retro:
      "Since less work is needed, farmers will engage in other activities during the day.",
    script: "The farmer enjoys your company.<br/>+£2,000",
    choice1: {
      destination: "mission_b3m5",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b3m5: {
    displayOnDashboard: true,
    tileId: 7,
    heroImageUrl: "/mission_b3m5.png",
    animation: "jackInTheBox",
    script: "One of the robots is looking anxious.",
    choice1: {
      destination: "mission_b3m5a1",
      text: "Rob it!",
    },
    choice2: {
      destination: "mission_b3m5a2",
      text: "Try to help it.",
    },
  },
  mission_b3m5a1: {
    heroImageUrl: "/mission_b3m5a1.png",
    animation: "jackInTheBox",
    retro: "You have picked the wrong target man…",
    script: "You have picked the wrong target man!<br/>+£0",
    choice1: {
      destination: "mission_b3m6",
      text: "Continue",
    },
    reward: 0,
    minimumBalance: 2999,
  },
  mission_b3m5a2: {
    heroImageUrl: "/mission_b3m5a2.png",
    animation: "jackInTheBox",
    retro: "Who says robots won’t develop their own religion?",
    script:
      "You covered its shift so that it can pray to its god. <br/>+£2,000",
    choice1: {
      destination: "mission_b3m6",
      text: "Continue",
    },
    reward: 2000,
  },
  mission_b3m6: {
    displayOnDashboard: true,
    tileId: 4,
    heroImageUrl: "/mission_b3m6.1.png",
    animation: "slide",
    script: "",
    choice1: {
      destination: "mission_b3m6q2",
      text: "Continue",
    },
  },
  mission_b3m6q2: {
    heroImageUrl: "/mission_b3m6.2.png",
    animation: "slide",
    choice1: {
      destination: "mission_b3m6q3",
      text: "Continue",
    },
  },
  mission_b3m6q3: {
    heroImageUrl: "/mission_b3m6.3.png",
    animation: "slide",
    choice1: {
      destination: "mission_b3m6q4",
      text: "Continue",
    },
  },
  mission_b3m6q4: {
    heroImageUrl: "/mission_b3m6.4.png",
    animation: "slide",
    choice1: {
      destination: "mission_b3m6q5",
      text: "Continue",
    },
  },
  mission_b3m6q5: {
    heroImageUrl: "/mission_b3m6.5.png",
    animation: "slide",
    choice1: {
      destination: "mission_b3m6q6",
      text: "Continue",
    },
  },
  mission_b3m6q6: {
    heroImageUrl: "/mission_b3m6.6.png",
    animation: "slide",
    script: "",
    choice1: {
      destination: "mission_b3m6a1",
      text: "Agree to the plan",
    },
    choice2: {
      destination: "mission_b3m6a2",
      text: "I'd rather lose my cat",
    },
  },
  mission_b3m6a1: {
    heroImageUrl: "/mission_b3m6a1.png",
    animation: "jackInTheBox",
    retro:
      "The VR technology could help those whose physical ability is compromised to engage in activities that are impossible for them in real life.",
    script: "Good choice!<br/>+£2,000",
    choice1: {
      destination: "won",
      text: "Continue",
    },
    reward: 2000,
    isFinalMission: true,
  },
  mission_b3m6a2: {
    heroImageUrl: "/mission_b3m6a2.png",
    animation: "jackInTheBox",
    script: "",
    choice1: {
      destination: "mission_b3m6q6",
      text: "Continue",
    },
    reward: 0,
  },
} as const satisfies Record<string, MissionState>;

export type StateKey = keyof typeof states;

export const getState = (stateId: StateKey): MissionState => states[stateId];

export const tileIsMission = (tileId: number): boolean => {
  return Object.values(states).some(
    (state: MissionState) => state.tileId === tileId
  );
};

export const getMissionStatesWithImages = (
  visitedStates: StateKey[]
): (MissionState & {
  heroImageUrl: string;
  visited: boolean;
  stateId: StateKey;
})[] => {
  return Object.entries(states)
    .filter(
      ([key, state]: [string, MissionState]) =>
        key.startsWith("mission_") && !!state.heroImageUrl && !!state.retro
    )
    .map(([key, state]) => ({
      ...state,
      visited: visitedStates.includes(key as StateKey),
      stateId: key as StateKey,
    }));
};

export const getPreviousStates = (
  startingStateId: StateKey,
  endingStateId: StateKey,
  getStateFn: (stateId: StateKey) => MissionState = getState
): MissionState[] => {
  const path: MissionState[] = [];
  const visited = new Set<StateKey>();

  const findPath = (stateId: StateKey): boolean => {
    if (visited.has(stateId)) {
      return false;
    }

    visited.add(stateId);

    const currentState = getStateFn(stateId);
    if (!currentState) {
      return false;
    }

    if (stateId === endingStateId) {
      path.push(currentState);
      return true;
    }

    if (currentState.choice1) {
      const choice1Destination = currentState.choice1.destination as StateKey;
      if (findPath(choice1Destination)) {
        path.push(currentState);
        return true;
      }
    }

    if (currentState.choice2) {
      const choice2Destination = currentState.choice2.destination as StateKey;
      if (findPath(choice2Destination)) {
        path.push(currentState);
        return true;
      }
    }

    return false;
  };

  findPath(startingStateId);

  return path.reverse();
};

export function getNextDestination(
  isFinalMission: MissionState["isFinalMission"],
  minimumBalance: MissionState["minimumBalance"],
  balance: number | null,
  currentStateId: StateKey,
  choice?: StateChoice
): string | undefined {
  const wonDestination = "/missions/won";
  const lostDestination = "/missions/lost";

  if (currentStateId === "won" || currentStateId === "lost") {
    return "/retro";
  }

  let nextDestination;
  if (isFinalMission) {
    if (balance && balance >= 5000) {
      nextDestination = wonDestination;
    } else {
      nextDestination = lostDestination;
    }
  } else if (balance && balance <= (minimumBalance ?? -1)) {
    nextDestination = lostDestination;
  } else if (balance && balance >= 5000) {
    nextDestination = wonDestination;
  } else if (choice) {
    if (getState(choice.destination as StateKey).displayOnDashboard) {
      nextDestination = `/dashboard/${choice.destination}`;
    } else {
      nextDestination = `/missions/${choice.destination}`;
    }
  }

  return nextDestination;
}
