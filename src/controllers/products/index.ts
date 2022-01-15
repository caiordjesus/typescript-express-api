import { mostAccessedProductsUC } from "useCases/products";
import mostAccessedProducts from "./most_accessed_products.controller";

const mostAccessedProductsWithUseCase = new mostAccessedProducts(mostAccessedProductsUC)

export {
    mostAccessedProductsWithUseCase
}