import * as mongoose from 'mongoose';
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

export const CharacterLookSchema = new mongoose.Schema({
  sex: {
    type: String,
    enum: [Sex.MALE, Sex.FEMALE],
    default: Sex.MALE
  },
  skin: {
    type: String,
    enum: [Skin.LIGHT, Skin.TANNED, Skin.TANNED2, Skin.DARK, Skin.DARK2],
    default: Skin.LIGHT
  },
  ears: {
    type: String,
    enum: [Ears.DEFAULT, Ears.BIG, Ears.ELVEN],
    default: Ears.DEFAULT
  },
  eyes: {
    type: String,
    enum: [
      Eyes.DEFAULT, Eyes.BLUE, Eyes.BROWN, Eyes.GRAY,
      Eyes.GREEN, Eyes.ORANGE, Eyes.PURPLE, Eyes.RED, Eyes.YELLOW
    ],
    default: Eyes.DEFAULT
  },
  nose: {
    type: String,
    enum: [Nose.DEFAULT, Nose.BIG, Nose.BUTTON, Nose.STRAIGHT],
    default: Nose.DEFAULT
  },
  maleHair: {
    type: String,
    enum: [
      MaleHair.DEFAULT, MaleHair.BEDHEAD, MaleHair.LONG, MaleHair.MOHAWK,
      MaleHair.PAGE, MaleHair.PARTED, MaleHair.PLAIN
    ]
  },
  femaleHair: {
    type: String,
    enum: [
      FemaleHair.DEFAULT, FemaleHair.LOOSE, FemaleHair.PIXIE, FemaleHair.PONYTAIL,
      FemaleHair.PRINCESS, FemaleHair.SWOOP, FemaleHair.UNKEMPT
    ]
  },
  hairColor: {
    type: String,
    enum: [
      HairColor.WHITEBLONDE, HairColor.BLONDE, HairColor.DARKBLONDE, HairColor.BRUNETTE,
      HairColor.BLUE, HairColor.GREEN, HairColor.PINK, HairColor.RAVEN
    ]
  },
  torso: {
    type: String,
    enum: [Torso.DEFAULT, Torso.BROWNSHIRT, Torso.MAROONSHIRT, Torso.TEALSHIRT, Torso.WHITESHIRT],
    default: Torso.DEFAULT
  },
  legs: {
    type: String,
    enum: [Legs.DEFAULT, Legs.MAGENTAPANTS, Legs.REDPANTS, Legs.TEALPANTS, Legs.WHITEPANTS] ,
    default: Legs.DEFAULT
  },
  shoes: {
    type: String,
    enum: [Shoes.DEFAULT, Shoes.BLACKSHOES, Shoes.BROWNSHOES, Shoes.MAROONSHOES],
    default: Shoes.DEFAULT
  },
  weapon: {
    type: String,
    enum: [Weapon.DAGGER],
    default: Weapon.DAGGER
  }
});
