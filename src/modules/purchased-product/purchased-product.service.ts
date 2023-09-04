import { Injectable } from '@nestjs/common';
import { PurchasedProductDTO } from './purchased-product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PurchasedProductService {

    constructor(private prisma: PrismaService) {}

    async checkWhetherProductRegistered(id: number) {
        const productRegistered = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        return productRegistered;
    }

    async purchaseProduct(id: number, amount: number) {
        const productRegistered = await this.checkWhetherProductRegistered(id);

        const amountAfterPurchase = productRegistered.amount - amount;

        await this.prisma.product.update({
            where: {
                id: id
            },
            data: {amount: amountAfterPurchase}
        });
    };

    async purchaseProducts(products: PurchasedProductDTO[]) {
        for (const product of products){
            const productRegistered = await this.checkWhetherProductRegistered(product.id);
            if (!productRegistered){
                throw new Error("Product is not registered")
            }
        }
        
        for (const product of products) {
            await this.purchaseProduct(product.id, product.amount)
        }

        return {
            message: 'Purchase completed successfully!'
        }
    }

}
