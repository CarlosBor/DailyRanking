import { http, HttpResponse } from 'msw'
import { mockScoreData } from "./mockData";


type ParsedScore = {
  game: "Akari" | "Wordle";
  score: number;
};

export function parseGameScore(text: string): ParsedScore | null {
  text = text.trim();

  // --- Akari ---
  if (text.startsWith("Daily Akari")) {
    const match = text.match(/🎯 (\d+)%/) || text.match(/🌟 Perfect!/);
    if (!match) return null;

    let score: number;
    if (match[0].includes("Perfect")) {
      score = 100;
    } else {
      score = parseInt(match[1], 10);
    }

    return { game: "Akari", score };
  }

  // --- Wordle ---
  if (text.startsWith("Wordle")) {
    const match = text.match(/(\d+)\/6/);
    if (!match) return null;

    const score = parseInt(match[1], 10);
    return { game: "Wordle", score };
  }

  // --- Not recognized ---
  return null;
}


export const handlers = [
  http.get('/scores', () => {
    return HttpResponse.json(mockScoreData)
  }),
  http.post('/scores', async ({request}) => {
    const body = await request.json();
    console.log(body)
    return HttpResponse.json("Oh boy")
  }),
]