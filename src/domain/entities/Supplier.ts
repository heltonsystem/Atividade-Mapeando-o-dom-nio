import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface SupplierProps {
  name: string
}

export class Supplier extends Entity<SupplierProps> {
  static create(
    props: SupplierProps,
    id?: UniqueEntityID,
  ) {
    const supplier = new Supplier(props, id)

    return supplier
  }
}