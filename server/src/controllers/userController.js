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

    const { email, password } = req.body;

    try {
        const response = await userService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, response.accessToken, { httpOnly: true, sameSite: 'none', secure: true })
        res.status(200).json(response)

    } catch (err) {
        const error = getError(err);
        res.status(401).json({ message: error })
    }

})

userController.get('/profile', async (req, res) => {

    const user = req.user;
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (token) {
        user.accessToken = token;
        res.json(user)
    } else {
        res.json({ "Data": "no user, invalid token" })
    }
})

userController.put('/profile/:id', async (req, res) => {
    const id = req.params.id;

    const { name, email} = req.body;
    try {
        await userService.updateProfile(id, name, email)
        
    } catch (err) {
        res.status(400).send({"message": "something is wrong"})
    }
})

userController.post('/logout', (req, res) => {
    try {
        res.clearCookie(AUTH_COOKIE_NAME).status(204).send({ message: 'Cookie cleared' })

    } catch (err) {
        console.log('error')
        console.log(err)
    }
})

export default userController