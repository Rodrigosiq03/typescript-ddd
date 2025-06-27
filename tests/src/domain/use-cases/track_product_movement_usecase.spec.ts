import {describe, it, expect} from 'vitest'

import {TrackProductMovementUseCase} from '../../../../src/domain/use-cases/track_product_movement_usecase'
import {ProductRepositoryMock} from '../../../../src/infra/repositories/mocks/product_repository_mock'



describe('TrackProductMovementUseCase', () => {
  it('should track product movement successfully', async () => {
    const productRepo = new ProductRepositoryMock()
    const useCase = new TrackProductMovementUseCase(productRepo)

    const productId = '331c425e-4f72-4e82-ad68-bf552f500750'

    const product = await useCase.execute(productId)

    expect(product).toBeDefined()
    expect(product.id.toString()).toBe(productId)
  })
})