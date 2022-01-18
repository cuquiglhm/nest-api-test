import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { UsersEntity } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {

  constructor(private readonly usersService: UsersService){
    
  }
  
  @Get()
  async index(){
    return await this.usersService.getAll();
  }

  @Post()
  async create(@Body() body){
    return await this.usersService.newUser(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) uuid: string){
    return await this.usersService.getByUuid(uuid);
  }
  

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) uuid: string, @Body() body: any){
    return await this.usersService.updateUser(uuid, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) uuid: string){
    return await this.usersService.deleteUser(uuid);
  }

}
