import { Entity } from "../../core/entities/entity";

export interface PurchaseOrderProps {
  productId: string;
  quantityOrdered: number;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
  createdAt: Date;
  estimatedDeliveryDate: Date;
}

export class PurchaseOrder extends Entity<PurchaseOrderProps> {
  get productId() {
    return this.props.productId;
  }

  get quantityOrdered() {
    return this.props.quantityOrdered;
  }

  get status() {
    return this.props.status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get estimatedDeliveryDate() {
    return this.props.estimatedDeliveryDate;
  }
}
