import userSchema from '../model/userSchema.js';
import conversationSchema from '../model/conversationSchema.js';
import messageSchema from '../model/messageSchema.js';
import mongoose from 'mongoose';
import e from 'express';

export const updatemessage = async (req, res) => {
    const { id,id2 } = req.params;

    try {
        const convoId = await conversationSchema.findById(id);
        const chat = messageSchema({
            senderid: id2,
            conversationid: id,
            text: req.body.text
        })
        await chat.save();

        const messages = await messageSchema.find({conversationid: id});

        res.status(200).json({messages, convoId})

    } catch (error) {
        return res.status(500).json({ message: error});
    }
}

export const getconvoId = async (req, res) => {
    const { id, id2 } = req.params;
    try {
        const convoId = await conversationSchema.findOne({ members:{$all : [ id, id2 ]} })
        // res.json(convoId);
        if(!convoId) {
            const convoid = conversationSchema({
                members: [
                    id, id2
                ]
            })

            await convoid.save();
            const convoId2 = await conversationSchema.findOne({ members: { $all: [ id, id2 ]} })
            const messages = await messageSchema.find({conversationid: convoId2._id})

            return res.json({messages: [], convoId2})
        }
        const messages = await messageSchema.find({conversationid: convoId._id})
        res.json({messages, convoId});
    } catch (err) {
        res.json(err);
    }
}