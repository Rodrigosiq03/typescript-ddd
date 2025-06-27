import { Supplier } from "../entities/supplier";

export interface ISupplierRepository {
  getById(id: string): Promise<Supplier | undefined>;
  getAll(): Promise<Supplier[]>;
  create(supplier: Supplier): Promise<Supplier>;
}