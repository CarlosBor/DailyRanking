export type Score = {
    player: string,
    score: number
}

export type ScoreData = {
    clues: {
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