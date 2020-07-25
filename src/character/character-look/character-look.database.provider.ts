import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { CharacterLookSchema } from './schemas/character.look.schema';
import { DATABASE_CONNECTION } from '../../database/database.provider';

export const CHARACTER_LOOK_MODEL = 'CHARACTER_LOOK_MODEL';
export const CHARACTER_LOOK_MODEL_NAME = 'CharacterLook';

export const characterLookDatabaseProvider: Provider = {
  provide: CHARACTER_LOOK_MODEL,
  useFactory: (connection: Connection) => connection.model(CHARACTER_LOOK_MODEL_NAME, CharacterLookSchema),
  inject: [DATABASE_CONNECTION]
};
