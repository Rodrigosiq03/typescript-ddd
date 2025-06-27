import { Entity } from "../../core/entities/entity";

export interface SupplierProps {
  name: string;
  contactInfo: string;
  deliveryInfo?: string;
}

export class Supplier extends Entity<SupplierProps> {
  get name() {
    return this.props.name;
  }

  get contactInfo() {
    return this.props.contactInfo;
  }

  get deliveryInfo() {
    return this.props.deliveryInfo;
  }
}
