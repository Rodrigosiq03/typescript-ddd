// import { Product } from "../entities/product";

import { Product } from "../../../domain/entities/product";
import { IProductRepository } from "../../../domain/repositories/product_repository_interface";

// export interface IProductRepository {
//   getById(id: string): Promise<Product | undefined>;
//   getAll(): Promise<Product[]>;
//   create(product: Product): Promise<Product>;
//   update(product: Product): Promise<Product>;
// }

export class ProductRepositoryMock implements IProductRepository {
  private products: Product[] = [
    new Product(
      { name: "Produto 1", size: "M", color: "Azul", quantity: 10, minimumQuantity: 2 },
      "331c425e-4f72-4e82-ad68-bf552f500750"
    ),
    new Product(
      { name: "Produto 2", size: "G", color: "Vermelho", quantity: 5, minimumQuantity: 1 },
      "ef0aecde-c9eb-48b6-8b1f-c95737f33f68"

    ),
    new Product(
      { name: "Produto 3", size: "P", color: "Verde", quantity: 20, minimumQuantity: 5 },
      "2f8c6175-ef97-485d-b7a5-503fd57426fa"
    ),
    new Product(
      { name: "Produto 4", size: "GG", color: "Preto", quantity: 15, minimumQuantity: 3 },
      "d2c8e1f0-4b6f-4c3a-bb5d-9d0e1f9c7a6b"
    ),
    new Product(
      { name: "Produto 5", size: "M", color: "Branco", quantity: 8, minimumQuantity: 2 },
      "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
    ),
    new Product(
      { name: "Produto 6", size: "G", color: "Cinza", quantity: 12, minimumQuantity: 4 },
      "12345678-90ab-cdef-1234-567890abcdef"
    )

  ];

  async getById(id: string): Promise<Product | undefined> {
    return this.products.find(product => product.id.toString() === id);
  }

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async update(product: Product): Promise<Product> {
    const index = this.products.findIndex(p => p.id.toString() === product.id.toString());
    if (index !== -1) {
      this.products[index] = product;
    }
    return product;
  }
}