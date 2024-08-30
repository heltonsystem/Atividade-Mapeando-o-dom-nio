import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface CustomerProps {
  name: string
}

export class Customer extends Entity<CustomerProps> {
  static create(
    props: CustomerProps,
    id?: UniqueEntityID,
  ) {
    const customer = new Customer(props, id)

    return customer
  }
}