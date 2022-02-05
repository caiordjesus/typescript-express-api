import GetAdressesController from "./GetAddresses.Controller";
import GetSubscribesController from "./GetSubscribes.Controller";

const getAdressesController = new GetAdressesController(null)
const getSubscribesController = new GetSubscribesController(null)

export {
    getAdressesController,
    getSubscribesController
}