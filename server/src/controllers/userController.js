import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import getError from "../utils/error.js";
const userController = Router();

userController.post('/register', async (req, res) => {
    const { name, email, password, rePassword } = req.body;

    try {
        const response = await userService.register(name, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, response.accessToken, { httpOnly: true, sameSite: 'none', secure: true })
        res.status(200).json(response)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
userController.post('/login', async (req, res) => {

    const { name, password } = req.body;

    try {
        const response = await userService.login(name, password);
        res.cookie(AUTH_COOKIE_NAME, response.accessToken, { httpOnly: true, sameSite: 'none', secure: true })
        res.status(200).json(response)

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }

})

userController.get('/profile', (req, res) => {

    if (req.user) {
        res.json(req.user)
    } else {
        res.json({ "Data": "no user, invalid token" })
    }

})

userController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
})

export default userController