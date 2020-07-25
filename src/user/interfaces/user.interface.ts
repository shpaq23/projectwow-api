import { Document } from 'mongoose';
import { Character } from '../../character/interfaces/character.interface';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly lastLoginDate: Date;
  readonly character: Character;
}
