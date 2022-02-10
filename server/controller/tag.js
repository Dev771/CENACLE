import tagSchema from '../model/tagSchema.js';

export const getTags = async (req, res) => {
    try {
        const tags = await tagSchema.find();

        res.status(200).json(tags)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}