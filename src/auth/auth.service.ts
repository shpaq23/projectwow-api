import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { LoginUserDto } from '../user/dtos/login-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../user/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from './auth-user.interface';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService,
              private readonly jwtService: JwtService) {
  }

  async register(createUserDTO: CreateUserDto): Promise<any> {
    return this.userService.create(createUserDTO);
  }

  async login(user: any) {
    await this.userService.setLoginDate(user.id);
    return {
      accessToken: this.jwtService.sign(user)
    }
  }

  async validateUser(loginUserDTO: LoginUserDto): Promise<AuthUser> {
    const user: User = await this.userService.getUserByEmail(loginUserDTO.email);
    if (user && await bcrypt.compare(loginUserDTO.password, user.password)) {
      return {
        id: user._id,
        email: user.email
      };
    }
    return null;
  }
}
