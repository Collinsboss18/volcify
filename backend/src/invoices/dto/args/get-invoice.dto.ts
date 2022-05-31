import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class GetInvoiceArgs {
    @Field()
    @IsNotEmpty()
    id: string;
}