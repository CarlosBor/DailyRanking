import { http, HttpResponse } from 'msw'
import { mockScoreData } from "./mockData";

export const handlers = [
  http.get('/scores', () => {
    return HttpResponse.json(mockScoreData)
  }),
  http.post('/scores', (pastedContent) => {
    //Whole lot of validation here
    
    return HttpResponse.json("Oh boy")
  }),
]