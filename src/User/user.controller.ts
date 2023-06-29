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

@Controller('buyer')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}
  @Post('create')
  create(@Body() user: Buyer) {
    return this.buyerService.createBuyer(user);
  }
  @Get('getBuyers')
  getBuyer() {
    return this.buyerService.allBuyers();
  }
  @Patch(':id')
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
  remove(@Param('id') id: number) {
    return this.buyerService.deleteBuyer(id);
  }
}
