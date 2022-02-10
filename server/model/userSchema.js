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
});

export default mongoose.model('User', UserSchema);