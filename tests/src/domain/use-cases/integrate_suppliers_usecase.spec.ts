import {describe, it, expect} from 'vitest'

import {IntegrateSuppliersUseCase} from '../../../../src/domain/use-cases/integrate_suppliers_usecase'

import {SupplierRepositoryMock} from '../../../../src/infra//repositories/mocks/supplier_repository_mock'


describe('IntegrateSuppliersUseCase', () => {
  it('should integrate suppliers successfully', async () => {
    const supplierRepository = new SupplierRepositoryMock()
    const useCase = new IntegrateSuppliersUseCase(supplierRepository)
    
    const suppliers = await useCase.execute()

    expect(suppliers).toBeDefined()
    expect(suppliers.length).toBeGreaterThan(0)
    expect(suppliers).toHaveLength(2)
  })
})
