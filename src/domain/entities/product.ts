import { Entity } from "../../core/entities/entity";

export interface ProductProps {
  name: string;
  size?: string;
  color?: string;
  quantity: number;
  minimumQuantity: number;
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }

  get size() {
    return this.props.size;
  }

  get color() {
    return this.props.color;
  }

  get quantity() {
    return this.props.quantity;
  }

  get minimumQuantity() {
    return this.props.minimumQuantity;
  }
}
