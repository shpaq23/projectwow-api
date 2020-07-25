import { CharacterLookDto } from '../character-look/dtos/character-look.dto';

export interface GetCharacterDto {
  nickname: string;
  level: number;
  look: CharacterLookDto
}
