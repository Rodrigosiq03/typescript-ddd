import { EntityNotFoundError } from "../../core/errors/domain_errors";
import { Product } from "../entities/product";
import { IProductRepository } from "../repositories/product_repository_interface";

export class SetMinimumStockLevelUseCase {
  constructor(private repo: IProductRepository) {}

  async execute(productId: string, minimumStockLevel: number): Promise<Product> {
    const product = await this.repo.getById(productId);
    if (!product) {
      throw new EntityNotFoundError("Product", productId);
    }

    product.minimumQuantity = minimumStockLevel;

    await this.repo.update(product);

    return product
  }
}
