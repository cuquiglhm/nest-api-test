import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entity/users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>){

  }

  async getAll(){
    return await this.usersRepository.find();
  }

  async getByUuid(uuid: string){
    try {
      return await this.usersRepository.findOneOrFail(uuid);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  async newUser(data: any){
    return await this.usersRepository.save(this.usersRepository.create(data));
  }

  async updateUser(uuid: string, data: any){
    let user = await this.usersRepository.findOneOrFail(uuid);

    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async deleteUser(uuid: string){
    await this.usersRepository.findOneOrFail(uuid);
    await this.usersRepository.delete(uuid);
  }
}
