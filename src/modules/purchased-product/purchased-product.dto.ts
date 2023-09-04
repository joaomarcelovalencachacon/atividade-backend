import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class PurchasedProductDTO {
    
    @IsNotEmpty({ message: "id must receive a value" })
    @IsNumber({}, {message: "id must receive a numerical value"})
    @Min(0, { message: "id must have a non negative value" })
    id: number;
    
    @IsNotEmpty({ message: "amount must receive a value" })
    @IsNumber({}, {message: "amount must receive a numerical value"})
    @Min(1, {message: "amount must a receive a positive value"})
    amount: number;
}