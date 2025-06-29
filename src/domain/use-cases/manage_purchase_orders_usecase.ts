import { PurchaseOrder } from "../entities/purchase_order";
import { IProductRepository } from "../repositories/product_repository_interface";
import { IPurchaseOrderRepository } from "../repositories/purchase_order_repository_interface";


export class ManagePurchaseOrdersUseCase {
  constructor(
    private productRepository: IProductRepository,
    private purchaseOrderRepository: IPurchaseOrderRepository
  ) {}

  async execute(): Promise<PurchaseOrder[]> {
    const products = await this.productRepository.getAll();

    for (const product of products) {
      if (product.quantity <= product.minimumQuantity) {
        // const order = new PurchaseOrder({
        //   productId: product.id.toString(),
        //   quantityOrdered: product.minimumQuantity * 2,
        //   status: "PENDING",
        //   createdAt: new Date(),
        //   estimatedDeliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        // });

        const order = PurchaseOrder.create({
          productId: product.id.toString(),
          quantityOrdered: product.minimumQuantity * 2,
          status: "PENDING",
          createdAt: new Date(),
          estimatedDeliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        await this.purchaseOrderRepository.create(order);
      }
    }

    const purchaseOrders = await this.purchaseOrderRepository.getAll();
    return purchaseOrders
  }
}
