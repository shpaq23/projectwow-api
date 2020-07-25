import * as mongoose from 'mongoose';
import { CHARACTER_MODEL_NAME } from '../../character/character.database.provider';

export const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  lastLoginDate: Date,
  character: { type: mongoose.Types.ObjectId, ref: CHARACTER_MODEL_NAME }
});
