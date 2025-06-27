import { Entity } from "../../core/entities/entity";

export interface SupplierProps {
  name: string;
  contactInfo: string;
}

export class Supplier extends Entity<SupplierProps> {
  get name() {
    return this.props.name;
  }

  get contactInfo() {
    return this.props.contactInfo;
  }
}
