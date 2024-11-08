import { Controller, Post, Body, Get, ValidationPipe, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateCharacterDto } from '../../application/dtos/character.dto';
import { CreatePersonUseCase } from '../../application/usecases/create-person.usecase';
import { GetPeopleUseCase } from '../../application/usecases/get-people.usecase';
import { GetStarWarsCharacterUseCase } from '../../application/usecases/get-star-wars-characters.usecase';

@ApiTags('Personajes')
@Controller('api/v1')
export class CharacterController {
  constructor(
    private readonly createPersonUseCase: CreatePersonUseCase,
    private readonly getPeopleUseCase: GetPeopleUseCase,
    private readonly getStarWarsCharacterUseCase: GetStarWarsCharacterUseCase
  ) {}

  @Post('create')
  @ApiOperation({ summary: 'Crear un nuevo personaje' })
  @ApiBody({ type: CreateCharacterDto })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Personaje creado exitosamente',
    type: CreateCharacterDto 
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Datos inválidos en la solicitud' 
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR, 
    description: 'Error interno del servidor' 
  })
  async createCharacter(
    @Body(new ValidationPipe({ transform: true })) 
    createCharacterDto: CreateCharacterDto
  ) {
    return this.createPersonUseCase.execute(createCharacterDto);
  }

  @Get('list')
  @ApiOperation({ summary: 'Obtener todos los personajes almacenados' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de personajes recuperada exitosamente',
    type: [CreateCharacterDto]
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR, 
    description: 'Error interno del servidor' 
  })
  async getCharacters() {
    return this.getPeopleUseCase.execute();
  }

  @Get('starwars/list')
  @ApiOperation({ summary: 'Obtener personajes de SWAPI' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de personajes de SWAPI recuperada exitosamente',
    type: [CreateCharacterDto]
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR, 
    description: 'Error al obtener datos de SWAPI' 
  })
  async getStarWarsCharacters() {
    return this.getStarWarsCharacterUseCase.execute();
  }
} 