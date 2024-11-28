import bcrypt from 'bcrypt';
import jwt from '../jwt.js';
import User from '../models/User.js'

const userService = {
    async register(name, email, password, rePassword) {

        const user = await User.findOne({ $or: [{ email }, { name }] });

        if (password !== rePassword) {
            throw new Error('Passwords must match!');
        }
        if (user) {
            throw new Error('User is already registered');
        }
        const newUser = await User.create({ name, email, password });

        return generateResponse(newUser)
    },
    async login(email, password) {

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password!');
        }
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid email or password!')
        }
        return generateResponse(user);
    },
}

async function generateResponse(user) { 
    const payload = {
        _id: user._id,
        email: user.email,
        name: user.name,
    }

    const header = { expiresIn: '2h' };

    const token = await jwt.sign(payload, 'SECRET', header)
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        accessToken: token
    }
}


export default userService;