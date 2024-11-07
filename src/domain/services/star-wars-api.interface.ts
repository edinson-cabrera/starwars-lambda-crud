import { GetStarWarsCharactersResponse } from "src/application/responses/get-star-wars-characters.response";
import { CharacterInterface } from "../interfaces/character.interface";

export interface StarWarsApiInterface {
  getStarWarsCharacters(): Promise<{
    count: number;
    next: string;
    previous: string;
    results: CharacterInterface[];
  }>;
}
