// import { Alert } from "../entities/alert";

import { UniqueEntityID } from "../../../core/entities/unique_entity_id";
import { Alert } from "../../../domain/entities/alert";
import { IAlertRepository } from "../../../domain/repositories/alert_repository_interface";

// export interface IAlertRepository {
//   getById(id: string): Promise<Alert | undefined>;
//   getAll(): Promise<Alert[]>;
//   create(alert: Alert): Promise<Alert>;
// }

export class AlertRepositoryMock implements IAlertRepository {
  private alerts: Alert[] = [
    new Alert(
      {
        productId: new UniqueEntityID("331c425e-4f72-4e82-ad68-bf552f500750"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      }, 
      "02aac7e3-ecf8-42c3-9024-80fb58b9ddd0"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("ef0aecde-c9eb-48b6-8b1f-c95737f33f68"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "2dbf0837-e28a-4b5e-a122-0c693b6f3074"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("2f8c6175-ef97-485d-b7a5-503fd57426fa"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      },
      "f31c8742-55c7-451a-a05f-82667c8d6278"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("331c425e-4f72-4e82-ad68-bf552f500750"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "811f5597-dc24-4bf3-a0d0-5afdeb8b2a5a" 
    ),
    new Alert(
      {
        productId: new UniqueEntityID("ef0aecde-c9eb-48b6-8b1f-c95737f33f68"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      }
    ),
    new Alert(
      {
        productId: new UniqueEntityID("2f8c6175-ef97-485d-b7a5-503fd57426fa"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "dcde36c0-994d-4465-a585-b72cb26a0217"
    ),

    new Alert(
      {
        productId: new UniqueEntityID("d2c8e1f0-4b6f-4c3a-bb5d-9d0e1f9c7a6b"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      },
      "45b2fe3d-69a2-492c-b023-ac9f683bf599"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "696b783b-6d6f-4ebf-b70c-7e415f1657f3"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("12345678-90ab-cdef-1234-567890abcdef"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      },
      "4308a98f-4ce8-41a1-ad1d-8bf36748922e"
    ), 
    new Alert(
      {
        productId: new UniqueEntityID("d2c8e1f0-4b6f-4c3a-bb5d-9d0e1f9c7a6b"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "f578c244-6ef4-41dc-9073-7e0878543553"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), 
        method: "NOTIFICATION", 
        alertDate: new Date()
      },
      "a0d177b3-ca30-4dcb-9b4d-f478232ae6bf"
    ),
    new Alert(
      {
        productId: new UniqueEntityID("12345678-90ab-cdef-1234-567890abcdef"), 
        method: "EMAIL", 
        alertDate: new Date()
      },
      "2927ef7c-d38b-4ea0-bd44-be01458d1526"
    ),
  ];

  async getById(id: string): Promise<Alert | undefined> {
    return this.alerts.find(alert => alert.id.toString() === id);
  }

  async getAll(): Promise<Alert[]> {
    return this.alerts;
  }

  async create(alert: Alert): Promise<Alert> {
    this.alerts.push(alert);
    return alert;
  }

  async getAlertsByProductId(productId: string): Promise<Alert[]> {
    return this.alerts.filter(alert => alert.productId.toString() === productId);
  }
}