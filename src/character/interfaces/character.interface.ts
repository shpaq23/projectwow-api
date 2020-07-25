import { Document } from 'mongoose';
import { CharacterLook } from '../character-look/interfaces/character-look.interface';

export interface Character extends Document {
  readonly nickname: string;
  readonly level: number;
  readonly look: CharacterLook;
}
