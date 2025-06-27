import { Alert } from "../entities/alert";

export interface IAlertRepository {
  getById(id: string): Promise<Alert | undefined>;
  getAll(): Promise<Alert[]>;
  create(alert: Alert): Promise<Alert>;
  getAlertsByProductId(productId: string): Promise<Alert[]>;
}