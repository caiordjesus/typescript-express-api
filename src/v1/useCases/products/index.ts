import MostAccessedProductsUseCase from "./mostAccessedProducts.useCase";
import GetProductsUseCase from "./GetProducts.UseCase";
import PostProductUseCase from "./PostProduct.UseCase";

const mostAccessedProductsUC = new MostAccessedProductsUseCase()
const productsUC = new GetProductsUseCase()
const postProductUC = new PostProductUseCase()

export {
    mostAccessedProductsUC,
    productsUC,
    postProductUC
}