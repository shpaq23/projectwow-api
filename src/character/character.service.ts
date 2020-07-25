import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Character } from './interfaces/character.interface';
import { CHARACTER_MODEL } from './character.database.provider';
import { CharacterLookService } from './character-look/character-look.service';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { of } from 'rxjs';
import { GetCharacterDto } from './dtos/get-character.dto';
import { CharacterDtoConverter } from './utils/character-dto.converter';
import { User } from '../user/interfaces/user.interface';


@Injectable()
export class CharacterService {

  constructor(@Inject(CHARACTER_MODEL) private readonly characterModel: Model<Character>,
              private readonly characterLookService: CharacterLookService) {
  }

  async createCharacter(characterDto: CreateCharacterDto, user: User): Promise<any> {
    const foundCharacter = await this.characterModel.findOne({ nickname: characterDto.nickname }).exec();
    if (foundCharacter) {
      throw new HttpException('Nickname already taken.', HttpStatus.BAD_REQUEST);
    }

    if (user.character) {
      throw new HttpException('User already have character.', HttpStatus.BAD_REQUEST);
    }
    const characterId = mongoose.Types.ObjectId();
    const characterLook = await this.characterLookService.create(characterDto.characterLook);
    const createdCharacter = new this.characterModel({
      _id: characterId,
      nickname: characterDto.nickname,
      level: 1,
      look: characterLook
    });
    await createdCharacter.save();

    // update user
    await user.updateOne({ character: createdCharacter }).exec();

    return of({ message: 'Character created!' }).toPromise();
  }

  async getCharacter(user: User): Promise<GetCharacterDto> {

    const foundCharacter = await user.character.populate('look').execPopulate();

    if (!foundCharacter) {
      throw new HttpException('No character for user.', HttpStatus.NOT_FOUND);
    }

    return of(CharacterDtoConverter.getCharacterDto(foundCharacter)).toPromise();

  }

}

