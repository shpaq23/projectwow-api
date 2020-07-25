import * as mongoose from 'mongoose';
import { Provider } from '@nestjs/common';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProvider: Provider = {
  provide: DATABASE_CONNECTION,
  useFactory: (): Promise<typeof mongoose> => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME } = process.env;
    const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.cfu96.azure.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  },
};
