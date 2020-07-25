import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { DatabaseModule } from '../database/database.module';
import { characterDatabaseProvider } from './character.database.provider';
import { CharacterLookModule } from './character-look/character-look.module';
import { CharacterService } from './character.service';

@Module({
  imports: [DatabaseModule, CharacterLookModule],
  controllers: [CharacterController],
  providers: [
    characterDatabaseProvider,
    CharacterService
  ]
})
export class CharacterModule {
}
