import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) {}

    async checkWhetherProductRegistered(id: number) {
        const productRegistered = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        return productRegistered;
    }

    async create(data: ProductDTO) { 

        const productRegistered = await this.checkWhetherProductRegistered(data.id);

        if (productRegistered) {throw new Error("id already in use");}
        
        const product = this.prisma.product.create({
            data,
        });

        return product
    }

    async findAll(){
        return this.prisma.product.findMany();
    };
    
    async findOne(id: number){
        const productRegistered = await this.checkWhetherProductRegistered(id);

        if (!productRegistered) {throw new Error("Product is not registered");}
        
        return this.prisma.product.findUnique({
            where: {
                id: productRegistered.id
            }
        })
    };

    async update(id: number, data: ProductDTO) {
        const changingProductRegistered = await this.checkWhetherProductRegistered(id);

        if(!changingProductRegistered) {
            throw new Error('Product is not registered')
        } else {
            const productWithDestinedId = await this.checkWhetherProductRegistered(data.id)
    
            if(productWithDestinedId && id != data.id){
                throw new Error('id already in use')
            }
        }
    
        return await this.prisma.product.update({
          data,
          where: {
            id: changingProductRegistered.id
          },
        })
      };
    
    async delete(id: number) {
        const productRegistered = await this.checkWhetherProductRegistered(id);

        if(!productRegistered) {throw new Error('Product is not registered')}

        return await this.prisma.product.delete({
            where: {
                id,
            }
        });
    }
}