import {describe, it, expect, beforeEach} from 'vitest'

import { GenerateStockAlertsUseCase } from '../../../../src/domain/use-cases/generate_stock_alerts_usecase'
import { ProductRepositoryMock } from '../../../../src/infra/repositories/mocks/product_repository_mock'
import { AlertRepositoryMock } from '../../../../src/infra/repositories/mocks/alert_repository_mock'

describe('GenerateStockAlertsUseCase', () => {
  it('should generate stock alerts based on stock levels', async () => {
    const productMockRepo = new ProductRepositoryMock()
    const alertMockRepo = new AlertRepositoryMock()

    const useCase = new GenerateStockAlertsUseCase(productMockRepo, alertMockRepo)

    const alerts = await useCase.execute()

    expect(alerts).toHaveLength(12)
  })
})