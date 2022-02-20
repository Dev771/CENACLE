import userSchema from '../model/userSchema.js';
import mongoose from 'mongoose';

export const getOneUser = async (req, res) => {
    const { _id } = req.params;

    try {

        if(!mongoose.Types.ObjectId.isValid(_id)) {
            const User = await userSchema.findOne({ googleId: _id });

            return res.status(200).json({ User });
        }

        const User = await userSchema.findById(_id);
        res.status(200).json({ User });
    } catch (error) {
        res.status(500).json({ message: error});
    }
}