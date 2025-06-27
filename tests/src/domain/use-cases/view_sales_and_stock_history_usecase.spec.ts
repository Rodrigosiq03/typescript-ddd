import {describe, it, expect} from 'vitest'
import {ViewSalesAndStockHistoryUseCase} from '../../../../src/domain/use-cases/view_sales_and_stock_history_usecase'
import {ProductRepositoryMock} from '../../../../src/infra/repositories/mocks/product_repository_mock'
import {SaleRepositoryMock} from '../../../../src/infra/repositories/mocks/sale_repository_mock'

describe('ViewSalesAndStockHistoryUseCase', () => {
  it('should view sales and stock history successfully', async () => {
    const productRepo = new ProductRepositoryMock()
    const saleRepo = new SaleRepositoryMock()
    const useCase = new ViewSalesAndStockHistoryUseCase(saleRepo, productRepo)

    const productId = '331c425e-4f72-4e82-ad68-bf552f500750'

    const history = await useCase.execute(productId)

    expect(history).toBeDefined()
    expect(history.length).toBeGreaterThan(0)
  })
})