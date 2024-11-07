import { NestFactory } from "@nestjs/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { AppModule } from "./app.module";
import { INestApplicationContext } from "@nestjs/common";
import { CreatePersonUseCase } from "./application/usecases/create-person.usecase";
import { GetPeopleUseCase } from "./application/usecases/get-people.usecase";
import { GetStarWarsCharacterUseCase } from "./application/usecases/get-star-wars-characters.usecase";

let app: INestApplicationContext;

async function getAppInstance() {
  app = app ?? (await NestFactory.createApplicationContext(AppModule));
  return app;
}

export async function getListPeople() {
  const app = await getAppInstance();
  const getPeopleUseCase = app.get(GetPeopleUseCase);

  return await getPeopleUseCase.execute();
}

export async function createPerson(event: APIGatewayProxyEvent) {
  const app = await getAppInstance();
  const createPersonUseCase = app.get(CreatePersonUseCase);
  return await createPersonUseCase.execute(JSON.parse(event.body));
}

export async function getStarWarsCharacters() {
  const app = await getAppInstance();
  const getStarWarsCharacterUseCase = app.get(GetStarWarsCharacterUseCase);

  return await getStarWarsCharacterUseCase.execute();
}