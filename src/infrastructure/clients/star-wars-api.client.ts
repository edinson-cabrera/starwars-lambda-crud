import { GetStarWarsCharactersResponse } from "src/application/responses/get-star-wars-characters.response";
import { CharacterInterface } from "src/domain/interfaces/character.interface";
import { StarWarsApiInterface } from "src/domain/services/star-wars-api.interface";

export class StarWarsApiClient implements StarWarsApiInterface {
  async getStarWarsCharacters(): Promise<{
    count: number;
    next: string;
    previous: string;
    results: CharacterInterface[];
  }> {
    const response = await fetch("https://swapi.dev/api/people");
    return await response.json();
  }
}
