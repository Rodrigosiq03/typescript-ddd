import {describe, it, expect} from 'vitest'
import {ManagePurchaseOrdersUseCase} from '../../../../src/domain/use-cases/manage_purchase_orders_usecase'
import { ProductRepositoryMock } from '../../../../src/infra/repositories/mocks/product_repository_mock'
import { PurchaseOrderRepositoryMock } from '../../../../src/infra/repositories/mocks/purchase_order_repository_mock'

describe('ManagePurchaseOrdersUseCase', () => {
  it('should create a purchase order successfully', async () => {
    const productRepository = new ProductRepositoryMock()
    const purchaseOrderRepository = new PurchaseOrderRepositoryMock()
    const useCase = new ManagePurchaseOrdersUseCase(productRepository, purchaseOrderRepository)

    const purchaseOrders = await useCase.execute()

    expect(purchaseOrders).toBeDefined()
    expect(purchaseOrders.length).toBeGreaterThan(0)
    expect(purchaseOrders).toHaveLength(2)
  })
})

