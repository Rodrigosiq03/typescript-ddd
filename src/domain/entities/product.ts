import { Entity } from "../../core/entities/entity";
import { EntityError } from "../../core/errors/domain_errors";

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

  set quantity(value: number) {
    if (value < 0) {
      throw new EntityError("quantity");
    }

    if (value < this.props.minimumQuantity) {
      throw new EntityError("quantity");
    }

    this.props.quantity = value;
  }

  set minimumQuantity(value: number) {
    if (this.props.minimumQuantity < 0) {
      throw new EntityError("minimumQuantity");
    }
    if (this.props.minimumQuantity > this.props.quantity) {
      throw new EntityError("minimumQuantity");
    }
    this.props.minimumQuantity = value;
  }
}
