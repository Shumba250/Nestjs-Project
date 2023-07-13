import { BuyerController } from './user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { BuyerService } from './user.service';
import { Buyer } from './user.entity';

describe('User Controller', () => {
  let controller: BuyerController;
  let service: BuyerService;
  const users = [
    {
      id: 1,
      firstName: 'mudakikwa',
      lastName: 'aimable',
      age: 25,
      email: 'mudakikwaaimable05@gmail.com',
    },
    {
      id: 2,
      firstName: 'rwigamba',
      lastName: 'kenneth',
      age: 25,
      email: 'rwigambakenneth@gmail.com',
    },
    {
      id: 3,
      firstName: 'umurungi',
      lastName: 'helen',
      age: 20,
      email: 'umurungihelen@gmail.com',
    },
    {
      id: 4,
      firstName: 'mugabo',
      lastName: 'alexandre',
      age: 28,
      email: 'mudakikwaaimable05@gmail.com',
    },
  ];
  const user: Buyer = {
    id: 1,
    firstName: 'mudakikwa',
    lastName: 'aimable',
    age: 25,
    email: 'mudakikwaaimable05@gmail.com',
  };
  const MocksService = {
    createBuyer: jest.fn((user) => {
      return {
        id: 1,
        ...user,
      };
    }),
    updateBuyer: jest.fn((id, user) => {
      return {
        id,
        ...user,
      };
    }),
    allBuyers: jest.fn(() => {
      return users;
    }),
    deleteBuyer: jest.fn().mockImplementation((id) => {
      return {
        id,
        user,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyerController],
      providers: [BuyerService],
    })
      .overrideProvider(BuyerService)
      .useValue(MocksService)
      .compile();
    controller = module.get<BuyerController>(BuyerController);
    service = module.get<BuyerService>(BuyerService);
  });
  it('should test for controller availability', () => {
    expect(controller).toBeDefined();
  });
  it('should test for service availability', () => {
    expect(service).toBeDefined();
  });
  describe('User', () => {
    const user: Buyer = {
      id: 1,
      firstName: 'mudakikwa',
      lastName: 'aimable',
      age: 25,
      email: 'mudakikwaaimable05@gmail.com',
    };
    it('should create a new user', async () => {
      const UserEntity: Buyer = {
        id: expect.any(Number),
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
      };
      expect(controller.create(user)).toEqual(UserEntity);
      expect(MocksService.createBuyer).toHaveBeenCalled();
      expect(MocksService.createBuyer).toHaveBeenCalledWith(user);
    });
    it('should update a user', () => {
      expect(controller.update(1, user)).toEqual(user);
      expect(MocksService.updateBuyer).toHaveBeenCalled();
      expect(MocksService.updateBuyer).toHaveBeenCalledWith(1, user);
    });
    it('should list all users', () => {
      expect(controller.getBuyer()).toEqual(users);
      expect(MocksService.allBuyers).toHaveBeenCalled();
    });
    // it('should delete a user', () => {
    //   const user: Buyer = {
    //     id: 1,
    //     firstName: 'mudakikwa',
    //     lastName: 'aimable',
    //     age: 25,
    //     email: 'mudakikwaaimable05@gmail.com',
    //   };
    //   expect(controller.remove(1)).toEqual(user);
    // });
  });
});
