import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { Provider } from '@nestjs/common';
import { DATABASE_CONNECTION } from '../database/database.provider';

export const USER_MODEL = 'USER_MODEL';
export const USER_MODEL_NAME = 'user';

export const userDatabaseProvider: Provider = {
  provide: USER_MODEL,
  useFactory: (connection: Connection) => connection.model(USER_MODEL_NAME, UserSchema),
  inject: [DATABASE_CONNECTION],
};
