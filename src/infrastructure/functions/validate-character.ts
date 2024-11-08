import { APIGatewayProxyResult } from "aws-lambda";
import { CreateCharacterStepInput, ValidationResult } from "src/domain/interfaces/step-functions.interface";

export const validateCharacter = async (
  input: CreateCharacterStepInput
): Promise<ValidationResult> => {
  const errors: string[] = [];
  const { character } = input;

  if (!character.name) {
    errors.push("Name is required");
  }

  if (!character.url) {
    errors.push("URL is required");
  }

  if (character.name && character.name.length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}; 