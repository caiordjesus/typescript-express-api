import { mostAccessedProductsUC, productsUC } from "../../useCases/products";
import mostAccessedProducts from "./most_accessed_products.controller";
import Products from "./products.controller";

const mostAccessedProductsWithUseCase = new mostAccessedProducts(mostAccessedProductsUC)
const ProductsWithUseCase = new Products(productsUC)

export {
    mostAccessedProductsWithUseCase,
    ProductsWithUseCase
}