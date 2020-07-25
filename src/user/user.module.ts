import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userDatabaseProvider } from './user.database.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    userDatabaseProvider,
    UserService
  ],
  exports: [UserService]
})
export class UserModule {
}
