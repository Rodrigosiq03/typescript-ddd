import { PurchaseOrder } from "../entities/purchase_order";

export interface IPurchaseOrderRepository {
  getById(id: string): Promise<PurchaseOrder | undefined>;
  getAll(): Promise<PurchaseOrder[]>;
  create(purchaseOrder: PurchaseOrder): Promise<PurchaseOrder>;
}