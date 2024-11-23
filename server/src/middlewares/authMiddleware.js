import { AUTH_COOKIE_NAME } from "../constants.js";
import jwt from "../jwt.js";

export const authMiddleware = async (req, res, next) => {

    const token = req.cookies[AUTH_COOKIE_NAME];
    console.log('something happens in auth middl')
    if (!token) {

        return next();
    }

    //validate token
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        req.isAuthenticated = true;
        res.locals.isAuthenticated = true;
        // res.locals.username = decodedToken.username;
        // res.locals.email = decodedToken.email;
        // res.locals._id = decodedToken._id;
        res.locals.user = decodedToken;
        next();

    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);

        // res.redirect('/auth/login')
    }
}

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return null;
    }

    next();
}

export const isGuest = (req, res, next) => {
    if (req.user) {
        return null;
    }
    next();
}
