import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BuyerService } from './user.service';
import { Buyer } from './user.entity';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('buyer')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}
  @Post('create')
  @ApiOperation({ summary: 'Add a  User' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          description: 'first name',
          example: 'user firstName',
        },
        lastName: {
          type: 'string',
          description: 'last name',
          example: 'user lastName',
        },
        age: {
          type: 'integer',
          description: 'age',
          example: '25',
        },
        email: {
          type: 'string',
          description: 'user email',
          example: 'example@gmail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User',
    schema: {
      type: 'object',
      items: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'first name',
            example: 'user firstName',
          },
          lastName: {
            type: 'string',
            description: 'last name',
            example: 'user lastName',
          },
          age: {
            type: 'integer',
            description: 'age',
            example: '25',
          },
          email: {
            type: 'string',
            description: 'user email',
            example: 'example@gmail.com',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'UnAuthorized',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  create(@Body() user: Buyer) {
    return this.buyerService.createBuyer(user);
  }
  @Get('getBuyers')
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({
    status: 200,
    description: 'Users',
  })
  @ApiResponse({
    status: 401,
    description: 'UnAuthorized',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  getBuyer() {
    return this.buyerService.allBuyers();
  }
  @Patch(':id')
  @ApiOperation({ summary: 'update User' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          description: 'first name',
          example: 'user firstName',
        },
        lastName: {
          type: 'string',
          description: 'last name',
          example: 'user lastName',
        },
        age: {
          type: 'integer',
          description: 'age',
          example: '25',
        },
        email: {
          type: 'string',
          description: 'user email',
          example: 'example@gmail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User',
    schema: {
      type: 'object',
      items: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'first name',
            example: 'user firstName',
          },
          lastName: {
            type: 'string',
            description: 'last name',
            example: 'user lastName',
          },
          age: {
            type: 'integer',
            description: 'age',
            example: '25',
          },
          email: {
            type: 'string',
            description: 'user email',
            example: 'example@gmail.com',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'UnAuthorized',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() user: Buyer,
  ) {
    return this.buyerService.updateBuyer(id, user);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'delete user',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'user deleted successfully',
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  @ApiResponse({
    status: 404,
    description: 'bad request',
  })
  remove(@Param('id') id: number) {
    return this.buyerService.deleteBuyer(id);
  }
}
