// import { PurchaseOrder } from "../entities/purchase_order";
import { PurchaseOrder } from "../../../domain/entities/purchase_order";
import { IPurchaseOrderRepository } from "../../../domain/repositories/purchase_order_repository_interface";

export class PurchaseOrderRepositoryMock implements IPurchaseOrderRepository {
  private purchaseOrders: PurchaseOrder[] = [
    new PurchaseOrder(
      { 
        productId: "331c425e-4f72-4e82-ad68-bf552f500750", 
        quantityOrdered: 10, 
        status: "PENDING", 
        createdAt: new Date(), 
        estimatedDeliveryDate: new Date() 
      },
      "95e5f6de-494a-4b39-a16b-a26758fe9bcc"
    ),
    new PurchaseOrder(
      { 
        productId: "2", 
        quantityOrdered: 5, 
        status: "DELIVERED", 
        createdAt: new Date(), 
        estimatedDeliveryDate: new Date() 
      },
      "d11a0b29-5a69-4970-a169-744d4a34124b"
    )
  ];

  async getById(id: string): Promise<PurchaseOrder | undefined> {
    return this.purchaseOrders.find(po => po.id.toString() === id);
  }

  async getAll(): Promise<PurchaseOrder[]> {
    return this.purchaseOrders;
  }

  async create(purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    this.purchaseOrders.push(purchaseOrder);
    return purchaseOrder;
  }
}
