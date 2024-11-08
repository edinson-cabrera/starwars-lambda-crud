export interface CreateCharacterStepInput {
  character: {
    name: string;
    url: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    homeworld?: string;
    films?: string[];
    species?: string[];
    vehicles?: string[];
    starships?: string[];
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

export interface NotificationPayload {
  message: string;
  character: {
    id: string;
    name: string;
  };
} 