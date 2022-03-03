import postSchema from '../model/postSchema.js';
import mongoose from 'mongoose';

import fs from 'fs';
import util from 'util';

const unlink = util.promisify(fs.unlink);

import { upload, getFile } from '../aws/s3.js';
import userSchema from '../model/userSchema.js';

export const getPost = (req, res) => {
    const Key = req.path.split('/')[1];
    const readStream = getFile(Key);

    readStream.pipe(res);
}

export const fetchPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await postSchema.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        
        const posts = await postSchema.find();

        res.status(200).json(posts);

    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await postSchema.find({ $or: [ { title }, { tags_type: { $in: tags.split(',') } } ]});

        res.status(200).json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBycreator = async (req , res) => {
    const {creatorid} = req.query;
    try {
        const posts = await postSchema.find({creatorId : creatorid})

        res.status(200).json({ data: posts }); 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const File = req.file;
    const Post = req.body;
    
    try {

        const result = await upload(File);
        await unlink(File.path)
        
        const newPost = postSchema({ ...Post, LocImage: result.Key, creatorId: req.userId, post_Type: File.mimetype });
        
        await newPost.save();

        res.status(200).json(newPost);

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

        // if(!mongoose.Types.ObjectId.isValid(Post.creatorId)) {
        //     const User = await userSchema.findOne({ googleId: Post.creatorId });
        //     await userSchema.findOneAndUpdate({ googleId: Post.creatorId }, {Total_Post_Like: User.Total_Post_Like+1});
        // } else {
        //     const User = await userSchema.findById(Post.creatorId);
        //     await userSchema.findByIdAndUpdate( Post.creatorId, { Total_Post_Like: User.Total_Post_Like+1 });
        // }


        const likeindex = Post.likes.findIndex((id) => id === String(req.userId));
        const dislikeindex = Post.dislikes.findIndex((id) => id === String(req.userId));

        if(likeindex === -1 && dislikeindex === -1) {
            Post.likes.push(req.userId);
            if(!mongoose.Types.ObjectId.isValid(Post.creatorId)) {
                const User = await userSchema.findOne({ googleId: Post.creatorId });
                await userSchema.findOneAndUpdate({ googleId: Post.creatorId }, {Total_Post_Like: User.Total_Post_Like+1});
            } else {
                const User = await userSchema.findById(Post.creatorId);
                await userSchema.findByIdAndUpdate( Post.creatorId, { Total_Post_Like: User.Total_Post_Like+1 });
            }
        } else if(likeindex === -1 && dislikeindex !== -1) {
            Post.likes.push(req.userId);
            Post.dislikes = Post.dislikes.filter((id) => id !== String(req.userId));
            if(!mongoose.Types.ObjectId.isValid(Post.creatorId)) {
                const User = await userSchema.findOne({ googleId: Post.creatorId });
                await userSchema.findOneAndUpdate({ googleId: Post.creatorId }, {Total_Post_Like: User.Total_Post_Like+2});
            } else {
                const User = await userSchema.findById(Post.creatorId);
                await userSchema.findByIdAndUpdate( Post.creatorId, { Total_Post_Like: User.Total_Post_Like+2 });
            }
        } else {
            Post.likes = Post.likes.filter((id) => id !== String(req.userId));
            if(!mongoose.Types.ObjectId.isValid(Post.creatorId)) {
                const User = await userSchema.findOne({ googleId: Post.creatorId });
                await userSchema.findOneAndUpdate({ googleId: Post.creatorId }, {Total_Post_Like: User.Total_Post_Like-1});
            } else {
                const User = await userSchema.findById(Post.creatorId);
                await userSchema.findByIdAndUpdate( Post.creatorId, { Total_Post_Like: User.Total_Post_Like-1 });
            }
        }

        const updatedPost = await postSchema.findByIdAndUpdate(id, Post, { new: true });
        // res.send(updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}


export const commentPost= async (req, res) =>{
    const{id}=req.params;
    const{value}= req.body;
    
    try{
        const post = await postSchema.findById(id);
        post.comments.push(value);
        const updatedPost= await postSchema.findByIdAndUpdate(id, post,{new:true});
        // res.status(200).json(updatedPost);
        const posts = await postSchema.find();

        res.status(200).json(posts);
    }
    catch (error) {
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
            if(!mongoose.Types.ObjectId.isValid(POST.creatorId)) {
                const User = await userSchema.findOne({ googleId: POST.creatorId });
                 await userSchema.findOneAndUpdate({ googleId: POST.creatorId }, {Total_Post_Like: User.Total_Post_Like-1});
            } else {
                const User = await userSchema.findById(Post.creatorId);
                 await userSchema.findByIdAndUpdate( POST.creatorId, { Total_Post_Like: User.Total_Post_Like-1 });
            }
        } else if(dislikeindex === -1 && likeindex !== -1) {
            POST.likes = POST.likes.filter((id) => id !== String(req.userId));
            POST.dislikes.push(req.userId);
            if(!mongoose.Types.ObjectId.isValid(POST.creatorId)) {
                const User = await userSchema.findOne({ googleId: POST.creatorId });
                 await userSchema.findOneAndUpdate({ googleId: POST.creatorId }, {Total_Post_Like: User.Total_Post_Like-2});
            } else {
                const User = await userSchema.findById(POST.creatorId);
                 await userSchema.findByIdAndUpdate( POST.creatorId, { Total_Post_Like: User.Total_Post_Like-2 });
            }
        } else {
            POST.dislikes = POST.dislikes.filter((id) => id !== String(req.userId));
            if(!mongoose.Types.ObjectId.isValid(POST.creatorId)) {
                const User = await userSchema.findOne({ googleId: POST.creatorId });
                 await userSchema.findOneAndUpdate({ googleId: POST.creatorId }, {Total_Post_Like: User.Total_Post_Like+1});
            } else {
                const User = await userSchema.findById(POST.creatorId);
                await userSchema.findByIdAndUpdate( POST.creatorId, { Total_Post_Like: User.Total_Post_Like+1 });
            }
        }

        const updatedPost = await postSchema.findByIdAndUpdate(id, POST, {new: true});

        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async ( req, res ) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Such POST Available!!!....');

    await postSchema.findByIdAndRemove(_id);

    res.json({ message: 'Post Deleted Successfully!.. '});
}