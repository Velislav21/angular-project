import jwt from "jsonwebtoken"

export const authMiddleware2 = (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'SECRET');

        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (err) {
        res.status(401).end();
    }
} 