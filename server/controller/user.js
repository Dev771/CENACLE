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

export const Likeuser = async (req, res) => {
   
    const { _id } = req.params;

    try {
        if(!req.userId) return res.status(400).json({ message: 'UnAuthenticated' });
       
        if(!mongoose.Types.ObjectId.isValid(_id)) {
           res.status(400).json({message : "user not found" })

        }

        const User = await userSchema.findById(_id);
        

        const likeindex = User.likes.findIndex((id) => id === String(req.userId));
        const dislikeindex = User.dislikes.findIndex((id) => id === String(req.userId));

        if(likeindex === -1 && dislikeindex === -1) {
            User.likes.push(req.userId);
        } else if(likeindex === -1 && dislikeindex !== -1) {
            User.likes.push(req.userId);
            User.dislikes = User.dislikes.filter((id) => id !== String(req.userId));
        } else {
            User.likes = User.likes.filter((id) => id !== String(req.userId));
        }

        const updatedUser = await userSchema.findByIdAndUpdate(_id, User, { new: true });
        // res.send(updatedPost);
        res.status(200).json(updatedUser);
        
    } catch (error) {

        res.status(500).json({ message: error});
    }
}

export const DisLikeuser = async (req, res) => {
   
    const { _id } = req.params;

    try {
        if(!req.userId) return res.status(404).json({ message: "Unauthenticated " });

        if(!mongoose.Types.ObjectId(_id)) return res.status(404).send("Post Not Found");

        const User = await userSchema.findById(_id);

        const dislikeindex = User.dislikes.findIndex((id) => id === String(req.userId));
        const likeindex = User.likes.findIndex((id) => id === String(req.userId));

        if(dislikeindex === -1 && likeindex === -1) {

            User.dislikes.push(req.userId);

        } else if(dislikeindex === -1 && likeindex !== -1) {

            User.likes = User.likes.filter((id) => id !== String(req.userId));
            User.dislikes.push(req.userId);

        } else {
            User.dislikes = User.dislikes.filter((id) => id !== String(req.userId));
           
        }

        const updatedUser = await userSchema.findByIdAndUpdate(_id, User , {new: true});

        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({ message: error});
    }
}