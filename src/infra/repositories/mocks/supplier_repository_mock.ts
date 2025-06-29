// import { Supplier } from "../entities/supplier";
import { Supplier } from "../../../domain/entities/supplier";
import { ISupplierRepository } from "../../../domain/repositories/supplier_repository_interface";
import { UniqueEntityID } from "../../../core/entities/unique_entity_id";

export class SupplierRepositoryMock implements ISupplierRepository {
  private suppliers: Supplier[] = [
    new Supplier(
      { 
        name: "Fornecedor 1", 
        contactInfo: "contato1@email.com" 
      }, new UniqueEntityID("29ec98cb-9eca-4298-96c9-0691cada1b36")),
    new Supplier(
      { 
        name: "Fornecedor 2", 
        contactInfo: "contato2@email.com" 
      }, new UniqueEntityID("8ff37c09-9b42-4e14-9950-40eb35422d58"))
  ];

  async getById(id: string): Promise<Supplier | undefined> {
    return this.suppliers.find(supplier => supplier.id.toString() === id);
  }

  async getAll(): Promise<Supplier[]> {
    return this.suppliers;
  }

  async create(supplier: Supplier): Promise<Supplier> {
    this.suppliers.push(supplier);
    return supplier;
  }
}
