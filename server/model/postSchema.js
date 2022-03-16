import mongoose from 'mongoose';

const PostSchema  = mongoose.Schema({
    title: String,
    Date_Of_Creation: {
        type: 'Date',
        default: Date.now(),
    }, 
    creatorId: String,
    creator: String,
    tags_name: String,
    tags_id: String,
    tags_type: String,
    post_Type: String,
    post_Texts: String,
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    comments:{

        type: Array,
        username:{
            type: String,
        },
        comment:{
            type: String,
        },
        id:{
            type: String,
        },
        userid: {
            type : String,
        }
    },
    Subject: String,
    Country: String,
    Location: String,
    LocImage: String,
});

export default mongoose.model('PostSchema', PostSchema);