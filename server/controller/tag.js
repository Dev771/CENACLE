import tagSchema from '../model/tagSchema.js';

export const getTags = async (req, res) => {
    try {
        const tags = await tagSchema.find();

        res.status(200).json(tags)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const createTag = async (req, res) => {
    const tagdata = req.body;

    const newTag = tagSchema({...tagdata});
    try {
        await newTag.save();

        res.status(201).json(newTag);
    } catch (error) {
        console.log(error);
    }
}