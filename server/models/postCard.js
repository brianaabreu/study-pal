import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    versionKey: false
} )

export const PostCard = mongoose.model('PostCard', cardSchema);

