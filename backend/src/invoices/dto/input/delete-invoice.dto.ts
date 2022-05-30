import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteInvoiceInput {
  @Field()
  @IsNotEmpty()
  id: string;
}
