import { CharacterLookDto } from '../character-look/dtos/character-look.dto';

export interface CreateCharacterDto {
  nickname: string;
  characterLook: CharacterLookDto;
}
