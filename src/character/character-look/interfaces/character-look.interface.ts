import { Document } from 'mongoose';
import { Sex } from '../enums/sex.enum';
import { Skin } from '../enums/skin.enum';
import { Ears } from '../enums/ears.enum';
import { Eyes } from '../enums/eyes.enum';
import { Nose } from '../enums/nose.enum';
import { MaleHair } from '../enums/male-hair.enum';
import { FemaleHair } from '../enums/female-hair.enum';
import { HairColor } from '../enums/hair-color.enum';
import { Torso } from '../enums/torso.enum';
import { Legs } from '../enums/legs.enum';
import { Shoes } from '../enums/shoes.enum';
import { Weapon } from '../enums/weapon.enum';

export interface CharacterLook extends Document {
  readonly sex: Sex;
  readonly skin: Skin;
  readonly eyes: Eyes;
  readonly nose: Nose;
  readonly ears: Ears;
  readonly maleHair: MaleHair;
  readonly femaleHair: FemaleHair;
  readonly hairColor: HairColor;
  readonly torso: Torso;
  readonly legs: Legs;
  readonly shoes: Shoes;
  readonly weapon: Weapon;
}
