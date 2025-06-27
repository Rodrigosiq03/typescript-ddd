import {describe, it, expect} from 'vitest'

import {SetMinimumStockLevelUseCase} from '../../../../src/domain/use-cases/set_minimum_stock_level_usecase'
import {ProductRepositoryMock} from '../../../../src/infra/repositories/mocks/product_repository_mock'
import {Product} from '../../../../src/domain/entities/product'

describe('SetMinimumStockLevelUseCase', () => {
  it('should set minimum stock level successfully', async () => {
    const productRepo = new ProductRepositoryMock()
    const useCase = new SetMinimumStockLevelUseCase(productRepo)

    const productId = '331c425e-4f72-4e82-ad68-bf552f500750'

    const minimumStockLevel = 5
    const oldProduct = await productRepo.getById(productId)
    const updatedProduct = await useCase.execute(productId, minimumStockLevel)

    expect(updatedProduct).toBeDefined()

    expect(updatedProduct.id.toString()).toBe(oldProduct?.id.toString())
    expect(updatedProduct.minimumQuantity).toBe(minimumStockLevel)

  })
})