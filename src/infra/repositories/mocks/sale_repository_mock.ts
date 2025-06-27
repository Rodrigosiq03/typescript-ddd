// import { Sale } from "../entities/sale";
import { Sale } from "../../../domain/entities/sale";
import { ISaleRepository } from "../../../domain/repositories/sale_repository_interface";

export class SaleRepositoryMock implements ISaleRepository {
  private sales: Sale[] = [
    new Sale(
      { 
        productId: "331c425e-4f72-4e82-ad68-bf552f500750", 
        quantitySold: 2, 
        saleDate: new Date(), 
        saleValue: 100 
      },
      "9d24cdd3-2844-4655-8f07-ed9b7524f095"
    ),
    new Sale(
      { 
        productId: "ef0aecde-c9eb-48b6-8b1f-c95737f33f68", 
        quantitySold: 1, 
        saleDate: new Date(), 
        saleValue: 50 
      },
      "f23dc5c3-8980-4676-b491-4b9c33c3dacf"
    )
  ];

  async getById(id: string): Promise<Sale | undefined> {
    return this.sales.find(sale => sale.id.toString() === id);
  }

  async create(sale: Sale): Promise<Sale> {
    this.sales.push(sale);
    return sale;
  }

  async getByProductId(productId: string): Promise<Sale[]> {
    return this.sales.filter(sale => sale.productId === productId);
  }
}
