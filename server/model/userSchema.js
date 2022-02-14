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
    theme: {
        color: {
            type: String,
            default: 'color-1',
        },
        background: {
            type: String,
            default: 'bg-2',
        } 
    }
});

export default mongoose.model('User', UserSchema);