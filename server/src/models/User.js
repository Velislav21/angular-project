import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants.js';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
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

    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
})

const User = model('User', userSchema)

export default User;