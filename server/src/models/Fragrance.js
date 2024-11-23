import { model, Schema } from 'mongoose';

const fragranceSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },

    image: {
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
        // type: Types.ObjectId,
        // ref: 'User',
        type: String
    }],
    owner: {
        // type: Types.ObjectId,
        // ref: 'User'
        type: String
    }
})

const Fragrance = model('Fragrance', fragranceSchema)

export default Fragrance