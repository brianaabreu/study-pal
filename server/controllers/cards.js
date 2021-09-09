import mongoose from 'mongoose';
import {PostCard} from '../models/postCard.js';

export const getCard = async (req, res) => {
    try {
        const postCards = await PostCard.find();
        res.status(200).json(postCards)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createCard = async (req, res) => {
    const card = req.body;
    const newCard = new PostCard(card);

    try {
        await newCard.save();
        res.status(201).json(newCard)
        console.log(card)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

