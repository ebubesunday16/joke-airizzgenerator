import jokeData from './jokes1.json';

export interface JokeArrayType {
    id: string;
    keyword: string;
    setup: string;
    punchline: string;
}



export const JokeArray: JokeArrayType[] = jokeData as JokeArrayType[]