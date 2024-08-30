import { expect, test } from "vitest"
import { Slug } from "./slug"

test("it should be able to create a new slug from text", () => {
  const slug = Slug.createFromText('Example of a product feature')

  expect(slug.value).toBe('example-of-a-product-feature')
})