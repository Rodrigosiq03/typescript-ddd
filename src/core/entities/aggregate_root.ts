import { DomainEvents } from '../events/domain_events'
import { DomainEvent } from '../events/domain_event'
import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domainEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() {
    this._domainEvents = []
  }

  public equals(other: AggregateRoot<Props>): boolean {
    if (other === this) {
      return true
    }

    if (other === null || other === undefined) {
      return false
    }

    if (this.constructor !== other.constructor) {
      return false
    }

    return this.id.equals(other.id)
  }
}