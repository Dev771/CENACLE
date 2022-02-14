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
        required: true,
    },
    Date_Of_Reg: {
        type: Date,
        default: Date.now(),
    },
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