import postSchema from '../model/postSchema.js';
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

export const updateTagData = async (postId, userId, tagName) => {
    await tagSchema.updateOne({ tagtype: tagName }, { $inc: { Number_Of_Posts: 1 }, $push: { PostedUsersDetail: { User_id: userId, PostPosted_id: postId } } })
}

export const updateAllTags = async (req, res) => {

    try {
        const allPosts = await postSchema.find();
    
        await tagSchema.bulkWrite(allPosts.map((post) => {
            return {
                updateOne: {
                    filter: { tagtype: post.tags_name },
                    update: {$inc: { Number_Of_Posts: 1 }, $push: { PostedUsersDetail: { User_id: post.creatorId, PostPosted_id: post._id } }}
                }
            }
        }))

        res.status(200).json({ msg: "data Sent Successfully" })

    } catch(err) {
        res.status(400).json({ msg: 'Error!!' })
    }

}