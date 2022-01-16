import MostAccessedProductsUseCase from "./mostAccessedProducts.useCase";
import productsUseCase from "./products.UseCase";

const mostAccessedProductsUC = new MostAccessedProductsUseCase()
const productsUC = new productsUseCase()

export {
    mostAccessedProductsUC,
    productsUC
}