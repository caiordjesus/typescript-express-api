import GetOrdersController from "./GetOrders.Controller";
import PostOrderController from "./PostOrder.Controller";

const getOrdersController = new GetOrdersController(null)
const postOrderController = new PostOrderController(null)

export {
    getOrdersController,
    postOrderController
}