import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class CreateInvoiceInput {
  @Field()
  @IsNotEmpty()
  to_name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  to_email: string;

  @Field()
  @IsNotEmpty()
  to_address: string;

  @Field()
  @IsNotEmpty()
  to_city: string;

  @Field()
  @IsNotEmpty()
  to_postCode: string;

  @Field()
  @IsNotEmpty()
  to_country: string;

  @Field()
  @IsNotEmpty()
  from_address: string;

  @Field()
  @IsNotEmpty()
  from_city: string;

  @Field()
  @IsNotEmpty()
  from_postCode: string;

  @Field()
  @IsNotEmpty()
  from_country: string;

  @Field()
  @IsNotEmpty()
  terms: string;

  @Field()
  @IsNotEmpty()
  date: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  // @ValidateNested({ each: true })
  // @ArrayMinSize(2)
  // @ArrayMaxSize(2)
  items: string;
}
