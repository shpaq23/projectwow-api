import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CharacterLook } from './interfaces/character-look.interface';
import { CharacterLookDto } from './dtos/character-look.dto';
import { CHARACTER_LOOK_MODEL } from './character-look.database.provider';

@Injectable()
export class CharacterLookService {

  constructor(@Inject(CHARACTER_LOOK_MODEL) private readonly characterLookModel: Model<CharacterLook>) {
  }

  async create(characterLookDto: CharacterLookDto): Promise<CharacterLook> {
    const createdCharacterLook = new this.characterLookModel({
      sex: characterLookDto?.sex,
      skin: characterLookDto?.skin,
      eyes: characterLookDto?.eyes,
      nose: characterLookDto?.nose,
      ears: characterLookDto?.ears,
      maleHair: characterLookDto?.maleHair,
      femaleHair: characterLookDto?.femaleHair,
      hairColor: characterLookDto?.hairColor,
      torso: characterLookDto?.torso,
      legs: characterLookDto?.legs,
      shoes: characterLookDto?.shoes,
      weapon: characterLookDto?.weapon
    });
    return await createdCharacterLook.save();
  }

}
