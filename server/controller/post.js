import postSchema from '../model/postSchema.js';
import mongoose from 'mongoose';

import { upload } from '../aws/s3.js';

export const getPost = async (req, res) => {
    try {
        
        // const posts = await postSchema.find();

        // res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const createPost = async (req, res) => {
    const File = req.file;
    const Post = req.body;
    
    try {
        // await newPost.save();
        const result = await upload(File);
        // const newPost = postSchema({ ...Post, LocImage: result.Key, creatorId: req.userId });
        console.log(result);
        // console.log(req.file);
        // console.log(req.body);
        res.status(200).json(newPost);
        res.send(`images/${result.Key}`);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const likePost = async (req, res) => {

    const { id } = req.params;

    try {
        if(!req.userId) return res.status(400).json({ message: 'UnAuthenticated' });

        if(!mongoose.Types.ObjectId(id)) return res.status(404).send("Post Not Found");

        const Post = await postSchema.findById(id);

        const likeindex = Post.likes.findIndex((id) => id === String(req.userId));
        const dislikeindex = Post.dislikes.findIndex((id) => id === String(req.userId));

        if(likeindex === -1 && dislikeindex === -1) {
            Post.likes.push(req.userId);
        } else if(likeindex === -1 && dislikeindex !== -1) {
            Post.likes.push(req.userId);
            Post.dislikes = Post.dislikes.filter((id) => id !== String(req.userId));
        } else {
            Post.likes = Post.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await postSchema.findByIdAndUpdate(id, Post, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const dislikePost = async (req, res) => {
    const { id } = req.params;

    try {
        if(!req.userId) return res.status(404).json({ message: "Unauthenticated " });

        if(!mongoose.Types.ObjectId(id)) return res.status(404).send("Post Not Found");

        const POST = await postSchema.findById(id);

        const dislikeindex = POST.dislikes.findIndex((id) => id === String(req.userId));
        const likeindex = POST.likes.findIndex((id) => id === String(req.userId));

        if(dislikeindex === -1 && likeindex === -1) {
            POST.dislikes.push(req.userId);
        } else if(dislikeindex === -1 && likeindex !== -1) {
            POST.likes = POST.likes.filter((id) => id !== String(req.userId));
            POST.dislikes.push(req.userId);
        } else {
            POST.dislikes = POST.dislikes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await postSchema.findByIdAndUpdate(id, POST, {new: true});

        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}