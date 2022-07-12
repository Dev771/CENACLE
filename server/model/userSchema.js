import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // username: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    Date_Of_Reg: {
        type: Date,
        default: Date.now(),
    },
    imageURL: String,
    id: String,
    googleId: String,
    Total_Post_Like: {
        type: Number,
        default: 0,
    },
    theme: {
        color: {
            type: String,
            default: 'color-1',
        },
        background: {
            type: String,
            default: 'bg-2',
        } 
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    active: {
        type: Boolean,
        default: false
    },
    activation_Code: {
        type: Number,
    },
    expiry_Date:{
        type: Date,
        default: () => Date.now()+1000*60*60
    },
    messages: {
        type: Array,
        default: []
    }
});

export default mongoose.model('User', UserSchema);