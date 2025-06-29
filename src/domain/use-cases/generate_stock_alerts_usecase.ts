import { IProductRepository } from "../repositories/product_repository_interface";
import { IAlertRepository } from "../repositories/alert_repository_interface";
import { Alert } from "../entities/alert";
import { UniqueEntityID } from "../../core/entities/unique_entity_id";

export class GenerateStockAlertsUseCase {
  constructor(
    private productRepo: IProductRepository,
    private alertRepo: IAlertRepository
  ) {}

  async execute(): Promise<Alert[]> {
    const products = await this.productRepo.getAll();

    for (const product of products) {
      if (product.quantity <= product.minimumQuantity) {
        // const alert = new Alert({
        //   productId: new UniqueEntityID(product.id.toString()),
        //   alertDate: new Date(),
        //   method: "EMAIL",
        // });

        const alert = Alert.create({
          productId: new UniqueEntityID(product.id.toString()),
          alertDate: new Date(),
          method: "EMAIL",
        });

        console.log(`Generating alert for product ${product.id} - ${product.name}`);

        await this.alertRepo.create(alert);
      }
    }

    const alerts = await this.alertRepo.getAll();
    return alerts
  }
}
