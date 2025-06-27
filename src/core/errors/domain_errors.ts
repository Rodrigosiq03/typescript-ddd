import { BaseError } from './base_error'

export class EntityError extends BaseError {
  constructor(message: string) {
    super(`Field ${message} is not valid`)
  }
}

export class EntityNotFoundError extends BaseError {
  constructor(entityName: string, id: string) {
    super(`Entity ${entityName} with ID ${id} not found`)
  }
}