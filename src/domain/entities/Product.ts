import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface ProductProps {
  name: string;
  description: string;
  stockQuantity: number;
  minStockQuantity: number;
  price: number;
  size?: string;
  color?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get stockQuantity() {
    return this.props.stockQuantity;
  }

  get minStockQuantity() {
    return this.props.minStockQuantity;
  }

  get price() {
    return this.props.price;
  }

  get size() {
    return this.props.size;
  }

  get color() {
    return this.props.color;
  }
  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get excerpt() {
    return this.description.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  set description(description: string) {
    this.props.description = description;
    this.touch();
  }

  set stockQuantity(stockQuantity: number) {
    this.props.stockQuantity = stockQuantity;
    this.touch();
  }

  set minStockQuantity(minStockQuantity: number) {
    this.props.minStockQuantity = minStockQuantity;
    this.touch();
  }

  set price(price: number) {
    this.props.price = price;
    this.touch();
  }

  set size(size: string | undefined) {
    this.props.size = size;
    this.touch();
  }

  set color(color: string | undefined) {
    this.props.color = color;
    this.touch();
  }

  static create(
    props: Optional<ProductProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const product = new Product(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return product;
  }
}
