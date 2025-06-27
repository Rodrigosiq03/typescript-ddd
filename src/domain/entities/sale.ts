import { Entity } from "../../core/entities/entity";

export interface SaleProps {
  productId: string;
  quantitySold: number;
  saleDate: Date;
  saleValue: number;
}

export class Sale extends Entity<SaleProps> {
  get productId() {
    return this.props.productId;
  }

  get quantitySold() {
    return this.props.quantitySold;
  }

  get saleDate() {
    return this.props.saleDate;
  }

  get saleValue() {
    return this.props.saleValue;
  }
}
