import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique_entity_id";

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

  static create(
    props: PurchaseOrderProps,
    id?: UniqueEntityID
  ): PurchaseOrder {
    return new PurchaseOrder({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      estimatedDeliveryDate: props.estimatedDeliveryDate ?? new Date(),
    }, id);
  }
}
