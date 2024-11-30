import { model, Schema, Types } from 'mongoose';

const fragranceSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },

    imageUrl: {
        type: String,
        required: true,
        // validate: /^https?:\/\//
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    scents: [{
        type: String
    }
    ],
    likedList: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Fragrance = model('Fragrance', fragranceSchema)

export default Fragrance