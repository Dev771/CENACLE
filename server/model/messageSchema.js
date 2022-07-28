import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
        senderid:{
            type:String
        },
        conversationid:{
            type:String
        },
        text:{
            type:String
        }
    },{timestamps:true}
);

export default mongoose.model('Message', messageSchema);