import { Sale } from "../entities/sale";

export interface ISaleRepository {
  getById(id: string): Promise<Sale | undefined>;
  getByProductId(productId: string): Promise<Sale[]>;
  create(sale: Sale): Promise<Sale>;
}