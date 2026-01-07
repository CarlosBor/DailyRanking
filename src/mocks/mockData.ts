import type { ScoreData } from "../types";

export const mockScoreData: ScoreData = {
  CluesBySam: {
    daily: [
      { player: "CluesBySam", score: 1120 },
      { player: "PuzzleFox", score: 1045 },
      { player: "GridSolver", score: 1010 },
      { player: "WordleWizard", score: 1085 },
    ],
    weekly: [
      { player: "CluesBySam", score: 5230 },
      { player: "PuzzleFox", score: 4870 },
      { player: "GridSolver", score: 4510 },
      { player: "WordleWizard", score: 4995 },
    ],
    allTime: [
      { player: "CluesBySam", score: 45120 },
      { player: "PuzzleFox", score: 43045 },
      { player: "GridSolver", score: 40100 },
      { player: "WordleWizard", score: 42085 },
    ],
  },
  Wordle: {
    daily: [
      { player: "WordleWizard", score: 980 },
      { player: "CluesBySam", score: 1020 },
      { player: "PuzzleFox", score: 1005 },
      { player: "GridSolver", score: 970 },
    ],
    weekly: [
      { player: "WordleWizard", score: 5980 },
      { player: "CluesBySam", score: 6120 },
      { player: "PuzzleFox", score: 6015 },
      { player: "GridSolver", score: 5900 },
    ],
    allTime: [
      { player: "WordleWizard", score: 45200 },
      { player: "CluesBySam", score: 46000 },
      { player: "PuzzleFox", score: 45150 },
      { player: "GridSolver", score: 44890 },
    ],
  },
  Akari: {
    daily: [
      { player: "AkariAce", score: 1100 },
      { player: "CluesBySam", score: 1075 },
      { player: "WordleWizard", score: 1020 },
      { player: "PuzzleFox", score: 1010 },
    ],
    weekly: [
      { player: "AkariAce", score: 5600 },
      { player: "CluesBySam", score: 5475 },
      { player: "WordleWizard", score: 5320 },
      { player: "PuzzleFox", score: 5210 },
    ],
    allTime: [
      { player: "AkariAce", score: 48000 },
      { player: "CluesBySam", score: 47075 },
      { player: "WordleWizard", score: 46200 },
      { player: "PuzzleFox", score: 45110 },
    ],
  },
};
