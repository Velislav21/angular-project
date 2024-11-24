import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import getError from "../utils/error.js";
const userController = Router();

userController.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        const response = await userService.register(username, email, password, confirmPassword);
        res.cookie('auth', response.accessToken, { httpOnly: true, sameSite: true, secure: true })
        res.json(response)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
userController.post('/login', async (req, res) => {

    const { username, password } = req.body;

    try {
        const response = await userService.login(username, password);
        res.cookie('auth', response.accessToken, { httpOnly: true, sameSite: true, secure: true })
        res.json(response)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }

})

userController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
})

export default userController