import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { CharacterSchema } from './schemas/character.schema';
import { DATABASE_CONNECTION } from '../database/database.provider';

export const CHARACTER_MODEL = 'CHARACTER_MODEL';
export const CHARACTER_MODEL_NAME = 'Character';

export const characterDatabaseProvider: Provider = {
  provide: CHARACTER_MODEL,
  useFactory: (connection: Connection) => connection.model(CHARACTER_MODEL_NAME, CharacterSchema),
  inject: [DATABASE_CONNECTION],
};
