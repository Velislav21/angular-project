import jwt from "jsonwebtoken"
import { AUTH_COOKIE_NAME } from "../constants.js";

export const authMiddleware = (req, res, next) => {
    // const token = req.cookies[AUTH_COOKIE_NAME];
    const token = req.header('X-Authorization')
    console.log(token)
    // console.log(req.cookies[AUTH_COOKIE_NAME])
    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'SECRET');

        // console.log(decodedToken)

        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (err) {
        console.log('something is wrong')
        //! TODO: something else
        res.end();
    }
} 