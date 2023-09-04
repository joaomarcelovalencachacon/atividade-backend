import { IsNotEmpty, IsNumber, IsString, IsUrl, Min } from "class-validator";

export class ProductDTO {
    
    @IsNotEmpty({ message: "id must receive a value" })
    @IsNumber({}, {message: "id must receive a numerical value"})
    @Min(0, { message: "id must have a non negative value" })
    id: number;

    @IsNotEmpty({message: "name must receive a value"})
    @IsString({message: "name must be a string"})
    name: string;

    @IsNotEmpty({ message: "price must receive a value" })
    @IsNumber({}, {message: "price must receive a numerical value"})
    @Min(0.01, {message: "price must receive a numerical value greater than or equal to 0.01"})
    price: number;

    @IsNotEmpty({message: "image must receive a value"})
    @IsString({message: "image must receive a value that's a string"})
    @IsUrl({}, {message: "image must receive a value that's an url"})
    image: string;
    
    @IsNotEmpty({ message: "amount must receive a value" })
    @IsNumber({}, {message: "amount must receive a numerical value"})
    @Min(0, {message: "amount must a receive a non negative value"})
    amount: number;
}