import { http, HttpResponse } from 'msw'
import { mockScoreData } from "./mockData";

type ParsedScore = {
  game: "Akari" | "Wordle" | "Clues";
  score: number;
};

export function parseGameScore(text: string): ParsedScore | null {
  text = text.trim();

  // --- Akari ---
  if (text.startsWith("Daily Akari")) {
    const accuracy = text.match(/🎯 (\d+)%/) || text.match(/🌟 Perfect!/);
    if (!accuracy) return null;

    let accuracyScore;
    if (accuracy[0].includes("Perfect")) {
      accuracyScore = 100;
    } else {
      accuracyScore = parseInt(accuracy[1], 10);
    }
    const scoreRow = text.split("\n")[2];
    const time = scoreRow.slice(scoreRow.length-5, scoreRow.length);
    const timeScore = 3600 - (parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]));
    const score = timeScore * accuracyScore/100
    return { game: "Akari", score };
  }

  // --- Wordle ---
  if (text.startsWith("Wordle")) {
    const match = text.match(/Wordle (\d,\d+) \d+\/6/);
    if (!match) return null;
    const score = parseInt(match[1].replace(",", ""), 10);
    return { game: "Wordle", score };
  }

  // --- Clues ---
  if (text.startsWith("I solved the daily Clues by Sam,") || text.startsWith("Clues by Sam - ")) {
    const corrects = text.split('').filter((char) => char === '\udfe9').length;
    const misses = text.split('').filter((char) => char === '\udfe8').length;
    const score = (corrects - misses) * 100;
    return { game: "Clues", score };
  }
  
  // --- Not recognized ---
  return null;
}

export const handlers = [
  http.get('/scores', () => {
    return HttpResponse.json(mockScoreData)
  }),
  http.post('/scores', async ({ request }) => {
    const body = await request.json() as { pastedScore: string };
    const gameWithScore = parseGameScore(body?.pastedScore);
    console.log("gameWithScore", gameWithScore);
    return HttpResponse.json(gameWithScore);
  }),
]