import { Product } from "../entities/product";

export interface IProductRepository {
  getById(id: string): Promise<Product | undefined>;
  getAll(): Promise<Product[]>;
  create(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
}