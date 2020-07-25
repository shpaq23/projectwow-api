import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { of } from 'rxjs';
import { USER_MODEL } from './user.database.provider';
import { ObjectId } from '../utils/ObjectId';

@Injectable()
export class UserService {

  constructor(@Inject(USER_MODEL) private readonly userModel: Model<User>) {
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const foundUser = await this.userModel.findOne({ email: createUserDto.email }).exec();
    if (foundUser) {
      throw new HttpException('E-mail already taken.', HttpStatus.BAD_REQUEST);
    }
    if (createUserDto.creationToken !== process.env.CREATION_TOKEN) {
      throw new HttpException('Wrong creation token.', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      email: createUserDto.email,
      password: hashedPassword
    });
    await createdUser.save();
    return of({ message: 'User successfully created.' }).toPromise();
  }

  async setLoginDate(userId: ObjectId): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { lastLoginDate: new Date() }).exec();
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).populate('character').exec();
  }


}
