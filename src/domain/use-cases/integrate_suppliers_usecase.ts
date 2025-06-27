import { Supplier } from "../entities/supplier";
import { ISupplierRepository } from "../repositories/supplier_repository_interface";

export class IntegrateSuppliersUseCase {
  constructor(private supplierRepository: ISupplierRepository) {}

  async execute(): Promise<Supplier[]> {
    const suppliers = await this.supplierRepository.getAll();
    // Lógica de integração com fornecedores [não detalhado na especificação]

    return suppliers
  }
}
