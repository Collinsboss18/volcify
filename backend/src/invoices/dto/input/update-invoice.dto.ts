import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEmail, IsNotEmpty, IsOptional, Validate } from 'class-validator';

@InputType()
export class UpdateInvoiceInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsOptional()
  to_name: string;

  @Field()
  @IsOptional()
  @IsEmail()
  to_email: string;

  @Field()
  @IsOptional()
  to_address: string;

  @Field()
  @IsOptional()
  to_city: string;

  @Field()
  @IsOptional()
  to_postCode: string;

  @Field()
  @IsOptional()
  to_country: string;

  @Field()
  @IsOptional()
  from_address: string;

  @Field()
  @IsOptional()
  from_city: string;

  @Field()
  @IsOptional()
  from_postCode: string;

  @Field()
  @IsOptional()
  from_country: string;

  @Field()
  @IsOptional()
  terms: string;

  @Field()
  @IsOptional()
  status: string;

  @Field()
  @IsOptional()
  from_email: string;

  @Field()
  @IsOptional()
  date: string;

  @Field()
  @IsOptional()
  description: string;

  @Field()
  @IsOptional()
  items: string;
}
