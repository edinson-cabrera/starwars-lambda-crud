import { IsString, IsOptional, IsArray, IsUrl, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacterDto {
  @ApiProperty({
    example: 'Luke Skywalker',
    description: 'Nombre del personaje',
    minLength: 2
  })
  @IsString()
  @MinLength(2)
  nombre: string;

  @ApiProperty({
    example: '172',
    description: 'Altura en centímetros'
  })
  @IsString()
  altura: string;

  @ApiProperty({
    example: '77',
    description: 'Masa en kilogramos'
  })
  @IsString()
  masa: string;

  @ApiProperty({
    example: 'rubio',
    description: 'Color de cabello'
  })
  @IsString()
  color_de_cabello: string;

  @ApiProperty({
    example: 'claro',
    description: 'Color de piel'
  })
  @IsString()
  color_de_piel: string;

  @ApiProperty({
    example: 'azul',
    description: 'Color de ojos'
  })
  @IsString()
  color_de_ojos: string;

  @ApiProperty({
    example: '19BBY',
    description: 'Año de nacimiento'
  })
  @IsString()
  anio_de_nacimiento: string;

  @ApiProperty({
    example: 'masculino',
    description: 'Género del personaje'
  })
  @IsString()
  genero: string;

  @ApiProperty({
    example: 'Tatooine',
    description: 'Planeta natal del personaje'
  })
  @IsString()
  planeta_natal: string;

  @ApiProperty({
    example: ['https://swapi.dev/api/films/1/'],
    description: 'URLs de las películas donde aparece',
    required: false
  })
  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  peliculas?: string[];

  @ApiProperty({
    example: ['https://swapi.dev/api/species/1/'],
    description: 'URLs de las especies a las que pertenece',
    required: false
  })
  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  especies?: string[];

  @ApiProperty({
    example: ['https://swapi.dev/api/vehicles/14/'],
    description: 'URLs de los vehículos que ha pilotado',
    required: false
  })
  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  vehiculos?: string[];

  @ApiProperty({
    example: ['https://swapi.dev/api/starships/12/'],
    description: 'URLs de las naves espaciales que ha pilotado',
    required: false
  })
  @IsArray()
  @IsUrl({}, { each: true })
  @IsOptional()
  naves_estelares?: string[];
} 