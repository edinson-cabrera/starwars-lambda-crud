import { SNS } from 'aws-sdk';
import { NotificationPayload } from 'src/domain/interfaces/step-functions.interface';

const sns = new SNS();
const TOPIC_ARN = process.env.CHARACTER_CREATION_TOPIC_ARN;

export const sendNotification = async (payload: NotificationPayload): Promise<void> => {
  await sns.publish({
    TopicArn: TOPIC_ARN,
    Message: JSON.stringify({
      default: JSON.stringify(payload),
      email: `New character ${payload.character.name} was created with ID: ${payload.character.id}`,
    }),
    MessageStructure: 'json',
  }).promise();
}; 