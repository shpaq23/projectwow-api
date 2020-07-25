import { Module } from '@nestjs/common';
import { characterLookDatabaseProvider } from './character-look.database.provider';
import { DatabaseModule } from '../../database/database.module';
import { CharacterLookService } from './character-look.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    characterLookDatabaseProvider,
    CharacterLookService
  ],
  exports: [
    CharacterLookService
  ]
})
export class CharacterLookModule {
}
