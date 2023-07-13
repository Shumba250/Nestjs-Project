import { Injectable } from '@nestjs/common';
import { Buyer } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { TRANSCODE } from '../Queues';
// import { Queue } from 'bullmq';
// import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class BuyerService {
  constructor(
    @InjectRepository(Buyer)
    private readonly buyerRepository: Repository<Buyer>,
  ) {}
  async createBuyer(user: Buyer) {
    try {
      const existingUser = await this.buyerRepository.findOne({
        where: { email: user.email },
      });
      if (existingUser) {
        throw new Error('user already exist');
      }
      const newUser = new Buyer();
      newUser.firstName = user.firstName;
      newUser.lastName = user.lastName;
      newUser.age = user.age;
      newUser.email = user.email;
      const createUser = await this.buyerRepository.create(newUser);
      return this.buyerRepository.save(createUser);
    } catch (error) {
      return error.message;
    }
    // await this.transcode.add('addUser', { user });
  }
  allBuyers() {
    return this.buyerRepository.find();
  }
  async updateBuyer(id: number, user: Buyer) {
    try {
      const buyer = await this.buyerRepository.findOne({ where: { id } });
      if (!buyer) {
        throw new Error('wrong id');
      }
      buyer.firstName = user.firstName;
      buyer.lastName = user.lastName;
      buyer.age = user.age;
      buyer.email = user.email;

      return this.buyerRepository.save(buyer);
    } catch (error) {
      return error.message;
    }
  }

  async deleteBuyer(id: number) {
    try {
      const buyer = await this.buyerRepository.findOne({ where: { id } });
      if (!buyer) {
        throw new Error('wrong id');
      }
      return this.buyerRepository.delete(buyer);
    } catch (error) {
      return error.message;
    }
  }
}
