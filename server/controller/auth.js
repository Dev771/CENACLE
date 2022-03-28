import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userSchema from "../model/userSchema.js";
import {email_Confirmation} from './email.js';


export const SignIn = async ( req, res ) => {
    const { email, password } = req.body;

    try{
        const User = await userSchema.findOne({ email });

        if(!User) return res.status(404).json({ message: "User Not Found" });
        else if(User && User.active === false) return res.status(404).json({ message: "User Not Found" })

        const isPasswordCorrect = await bcrypt.compare(password, User.password);

        if(!isPasswordCorrect) return res.status(400).json({messsge: 'Password Wrong!!!'});

    
        const checkUser = await userSchema.findOne({email, imageURL: { "$exists": true }});

        if(!checkUser) {
            const images = ['https://i.ibb.co/192hXc5/G1.png', 'https://i.ibb.co/VJhf3mB/G2.png', 'https://i.ibb.co/0jBDP4H/G3.png', 'https://i.ibb.co/HHzjGkB/B1.png', 'https://i.ibb.co/GJ20Nw4/B2.png', 'https://i.ibb.co/HV8HR6Q/B3.png'];
            var image = images[Math.floor(Math.random() * images.length)];
            
            const updatedUser = await userSchema.updateOne({ email }, {
                $set : {
                    "imageURL" : image 
                }
            });

            const token = jwt.sign({ email: User.email, id: User._id }, 'test', { expiresIn: '1h'});

            const result = await userSchema.findOne({email});

            return res.status(200).json({ result: result, token});
        }
            
        const token = jwt.sign({ email: User.email, id: User._id }, 'test', { expiresIn: '1h'});

        return res.status(200).json({ result: User, token});
    } catch (error) {
        return res.status(500).json({ message: "something went wrong||"});
    }
}

export const SignUp = async ( req, res ) => {
    
    // res.status(200).json(req.body);

    const { email, password, confirmPassword, firstName, lastName, imageURL } = req.body;

    try{
        const User = await userSchema.findOne({ email });

        if(User && User.active === true) return res.status(400).json({ message: "User Already Exists"});

        if(password !== confirmPassword) return res.status(400).json({ message: "Password Doesnt Match"});
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const randomNumber = Math.floor(Math.random()*(999999 - 100000 + 1) + 100000)

        if(User && User.active === false) {
            userSchema.findOneAndUpdate({ email }, { activation_Code: randomNumber, password: hashedPassword, name: `${firstName} ${lastName}`,active: false ,expiry_Date: Date.now()+1000*60*60, imageURL: imageURL }, (err, result) => {
                if(err) return res.status(404).json({ msg: err,  status: "failure"});
                else {
                    email_Confirmation({email, randomNumber, name : `${firstName} ${lastName}`}, (cbData) => {
                        if(cbData.status == 'scc') {
                            return res.status(200).json({result, status:"Success"});
                        } else {
                            return res.status(400).json({ msg: cbData.msg, status: "failure"})
                        }
                    });
                }
            });
        } else {
            userSchema.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, imageURL: imageURL, activation_Code: randomNumber}, (err, result) => {
                if(err) return res.status(404).json({ message: err , status: "failure"});
                else {
                    email_Confirmation({email, randomNumber, name: result.name}, (cbData) => {
                        if(cbData.status == 'scc') {
                            return res.status(200).json({result , status: "Success"});
                        } else {
                            return res.status(400).json({ msg: cbData.msg , status: "failure"})
                        }
                    });
                }
            });
        }
    } catch (error) {
        res.status(500).json({ message: "something went wrong||"});
    }
}


export const VerifyOTP = async(req,res) => {

    const {ID, OTP}  = req.params;
    try {
        const user = await userSchema.findOne({email: ID});
        
        if(!user) return res.status(404).json({message: "User not found"});

        if(user.active == false && user.activation_Code == OTP && user.expiry_Date >= Date.now() ){
           await userSchema.findOneAndUpdate({email: ID}, {active : true})
           const result = await userSchema.findOne({email : ID })

           const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: '1h'});
           
           return res.status(200).json({ result, token , status: "scc"});
        }
        else{
            return res.status(500).json({status: "err" , message: "Either emailid is verified or OTP is incorrect"});
        }
    } catch (error) {
        res.status(500).json({ message: "something went wrong||"});
    }
}


export const GoogleSignUp = async (req, res) => {
    const { email, givenName, googleId, imageUrl, name } = req.body;

    try {
        const User =  await userSchema.findOne({ email });

        if(!User) {
            const result = await userSchema.create({ email, password: '', name: name, imageURL: imageUrl, googleId: googleId });

            return res.status(200).json(result);
        }

        if(User.password === "") return res.status(200).json(User);

        res.status(400).json({ message: "User Already Exists With Same Id" });

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!!!"});
    }
}