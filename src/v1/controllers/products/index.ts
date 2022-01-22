import { mostAccessedProductsUC, productsUC, postProductUC } from "../../useCases/products";
import mostAccessedProducts from "./most_accessed_products.controller";
import Products from "./GetProducts.controller";
import PostProductController from "./PostProduct.controller";

const mostAccessedProductsWithUseCase = new mostAccessedProducts(mostAccessedProductsUC)
const ProductsWithUseCase = new Products(productsUC)
const postProductWithUseCase = new PostProductController(postProductUC)

export {
    mostAccessedProductsWithUseCase,
    ProductsWithUseCase,
    postProductWithUseCase
}