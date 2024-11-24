import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants.js';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        // minLength: 2,
        // maxLenght: 20
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        // minLength: 10
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // minLength: 4
    }
})

userSchema.pre('save', async function () {

    const hash = bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
})

const User = model('User', userSchema)

export default User;