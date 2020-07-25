import { ObjectId } from '../utils/ObjectId';

export interface AuthUser {
  id: ObjectId;
  email: string;
}
