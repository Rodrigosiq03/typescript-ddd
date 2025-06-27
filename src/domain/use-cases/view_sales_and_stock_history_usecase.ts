import { EntityNotFoundError } from "../../core/errors/domain_errors";
import { Sale } from "../entities/sale";
import { IProductRepository } from "../repositories/product_repository_interface";
import { ISaleRepository } from "../repositories/sale_repository_interface";

export class ViewSalesAndStockHistoryUseCase {
  constructor(
    private salesRepo:ISaleRepository, 
    private productRepo: IProductRepository
  ) {}

  async execute(productId: string): Promise<Sale[]> {
    const product = await this.productRepo.getById(productId);
    if (!product) {
      throw new EntityNotFoundError("Product", productId);
    }

    const sales = await this.salesRepo.getByProductId(productId);
    return sales
  }
}