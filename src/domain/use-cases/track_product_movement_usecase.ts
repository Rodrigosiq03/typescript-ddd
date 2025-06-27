import { EntityNotFoundError } from "../../core/errors/domain_errors";
import { IProductRepository } from "../repositories/product_repository_interface";
import { Product } from "../entities/product";

export class TrackProductMovementUseCase {
  constructor(private repo: IProductRepository) {}

  async execute(productId: string): Promise<Product> {
    const product = await this.repo.getById(productId);
    if (!product) {
      throw new EntityNotFoundError("Product", productId);
    }
    // Lógica de rastreamento [não detalhado na especificação]

    return product;
  }
}
