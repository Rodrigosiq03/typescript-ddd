import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique_entity_id";

export interface AlertProps {
  productId: UniqueEntityID;
  alertDate: Date;
  method: "EMAIL" | "NOTIFICATION";
}

export class Alert extends Entity<AlertProps> {
  get productId() {
    return this.props.productId;
  }

  get alertDate() {
    return this.props.alertDate;
  }

  get method() {
    return this.props.method;
  }

  static create(
    props: AlertProps,
    id?: UniqueEntityID
  ): Alert {
    return new Alert({
      ...props,
      alertDate: props.alertDate ?? new Date(),
    }, id);
  }
}
