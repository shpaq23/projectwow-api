import * as mongoose from 'mongoose';
import { CHARACTER_LOOK_MODEL_NAME } from '../character-look/character-look.database.provider';

export const CharacterSchema = new mongoose.Schema({
  nickname: String,
  level: Number,
  look: { type: mongoose.Types.ObjectId, ref: CHARACTER_LOOK_MODEL_NAME }
});
