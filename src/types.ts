export type Score = {
    player: string,
    score: number
}

export type ScoreData = {
    CluesBySam: {
        daily: Score[],
        weekly: Score[]
        allTime: Score[]
    },
    Wordle:{
        daily: Score[],
        weekly: Score[],
        allTime: Score[]
    },
    Akari: {
        daily: Score[],
        weekly: Score[],
        allTime: Score[]
    }
}

export type Game = keyof ScoreData;
export type TimeFrame = "daily" | "weekly" | "allTime";