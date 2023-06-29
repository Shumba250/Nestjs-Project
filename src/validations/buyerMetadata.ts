import { Type } from '@nestjs/common';

export interface ArgumentMetadata {
  type: 'body';
  metatype: Type<string>;
  data: string;
}
