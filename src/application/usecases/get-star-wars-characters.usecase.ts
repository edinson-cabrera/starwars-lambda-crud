import { StarWarsApiInterface } from "src/domain/services/star-wars-api.interface";
import { GetStarWarsCharactersResponse } from "../responses/get-star-wars-characters.response";
import { Inject } from "@nestjs/common";
import { StarWarsApiClient } from "src/infrastructure/clients/star-wars-api.client";

export class GetStarWarsCharacterUseCase {
  constructor(
    @Inject(StarWarsApiClient)
    private starWarsApiClient: StarWarsApiInterface
  ) {}

  async execute() {
    try {
      const { results } = await this.starWarsApiClient.getStarWarsCharacters();
      return results.map((character) => {
        return new GetStarWarsCharactersResponse(
          character.name,
          character.height,
          character.mass,
          character.hair_color,
          character.skin_color,
          character.eye_color,
          character.birth_year,
          character.gender,
          character.homeworld,
          character.films,
          character.species,
          character.vehicles,
          character.starships,
          character.created,
          character.edited,
          character.url
        );
      });
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify(e),
      };
    }
  }
}
