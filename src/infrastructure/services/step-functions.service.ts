import { Injectable } from '@nestjs/common';
import { StepFunctions } from 'aws-sdk';
import { CreateCharacterStepInput } from 'src/domain/interfaces/step-functions.interface';

@Injectable()
export class StepFunctionsService {
  private stepFunctions: StepFunctions;

  constructor() {
    this.stepFunctions = new StepFunctions({
      region: process.env.REGION,
    });
  }

  async startCharacterCreation(input: CreateCharacterStepInput) {
    const params = {
      stateMachineArn: process.env.CHARACTER_CREATION_STATE_MACHINE_ARN,
      input: JSON.stringify(input),
    };

    return this.stepFunctions.startExecution(params).promise();
  }
} 