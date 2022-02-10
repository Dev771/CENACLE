import mongoose from 'mongoose';

const tagSchema = mongoose.Schema({
    name: String, 
    tagtype: String,
    createdBy: String,
    createdOn: {
        type: Date,
        default: Date.now()
    },
    CreatorsEmailId: String,
    Number_Of_Posts: {
        type: Number,
        default: 0,
    },
    PostedUsersDetail: [{
        User_id: String,
        PostPosted_id: String,
    }]
});

export default mongoose.model('tag', tagSchema);