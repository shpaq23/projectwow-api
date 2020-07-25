import { Character } from '../interfaces/character.interface';
import { GetCharacterDto } from '../dtos/get-character.dto';


export abstract class CharacterDtoConverter {

  static getCharacterDto(character: Character): GetCharacterDto {
    return {
      nickname: character.nickname,
      level: character.level,
      look: character.look
    };
  }

}
