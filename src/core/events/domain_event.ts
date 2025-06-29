import { UniqueEntityID } from '../entities/unique_entity_id'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueEntityID
}