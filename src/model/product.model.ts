import Brand from "./brand.model"
import Category from "./category.model"

type Product = {
   id: number,
  name: string,
  image: string,
  brand: Brand,
  category: Category,
  price: number
}

export default Product