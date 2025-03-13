import ProductList from "@/components/shared/product/product-list"
import { getLatestProducts } from "@/lib/actions/product.actions"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function HomePage() {
  await delay(200)
  const latestProducts = await getLatestProducts()

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  )
}
