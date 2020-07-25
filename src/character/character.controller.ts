import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateCharacterDto } from './dtos/create-character.dto';
import { CharacterService } from './character.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../user/interfaces/user.interface';

@Controller('character')
export class CharacterController {

  constructor(private readonly characterService: CharacterService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createCharacter(@Request() req, @Body() characterDTO: CreateCharacterDto) {
    const user: User = req.user;
    return this.characterService.createCharacter(characterDTO, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getCharacter(@Request() req) {
    const user: User = req.user;
    return this.characterService.getCharacter(user);
  }


}
