import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class GetInvoiceArgs {
    @Field()
    @IsOptional()
    @IsNotEmpty()
    id: string;
}