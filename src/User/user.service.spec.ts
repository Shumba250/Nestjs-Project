import { Test, TestingModule } from '@nestjs/testing';
import { BuyerService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Buyer } from './user.entity';

describe('User Service', () => {
  let service: BuyerService;
  const MocksUserRepository = {
    findOne: jest.fn().mockImplementation((user) => {
      where: {
        email: {
          user.email;
        }
      }
    }),
    create: jest.fn().mockImplementation((user) => user),
    save: jest.fn().mockImplementation((user) => {
      return {
        id: 1,
        ...user,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuyerService,
        {
          provide: getRepositoryToken(Buyer),
          useValue: MocksUserRepository,
        },
      ],
    }).compile();
    service = module.get<BuyerService>(BuyerService);
  });
  it('should test for service availability', () => {
    expect(service).toBeDefined();
  });
  it('should create a new user record and return the user', async () => {
    const user: Buyer = {
      id: 1,
      firstName: 'mudakikwa',
      lastName: 'aimable',
      age: 25,
      email: 'mudakikwaaimable05@gmail.com',
    };
    expect(await service.createBuyer(user)).toEqual(user);
    expect(MocksUserRepository.create).toHaveBeenCalled();
    expect(MocksUserRepository.findOne).toHaveBeenCalled();
  });
});
