import LoginController from "./login.controller";
import SignupController from "./signup.controller";

const loginControllerWithUseCase = new LoginController(null)
const signupControllerWithUseCase = new SignupController(null)

export {
    loginControllerWithUseCase,
    signupControllerWithUseCase
}