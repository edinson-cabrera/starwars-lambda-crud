import { Module } from '@nestjs/common';
import { CharacterController } from './infrastructure/controllers/character.controller';
import { AppDynamoRepository } from './infrastructure/repositories/impl/app-dynamo-impl.repository';
import { CreatePersonUseCase } from './application/usecases/create-person.usecase';
import { GetPeopleUseCase } from './application/usecases/get-people.usecase';
import { GetStarWarsCharacterUseCase } from './application/usecases/get-star-wars-characters.usecase';
import { StarWarsApiClient } from './infrastructure/clients/star-wars-api.client';

@Module({
  imports: [],
  controllers: [CharacterController],
  providers: [
    AppDynamoRepository,
    StarWarsApiClient,
    CreatePersonUseCase,
    GetPeopleUseCase,
    GetStarWarsCharacterUseCase
  ],
})
export class AppModule {}
