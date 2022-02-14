import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userSchema from "../model/userSchema.js";

export const SignIn = async ( req, res ) => {
    const { email, password } = req.body;

    try{
        const User = await userSchema.findOne({ email });

        if(!User) return res.status(404).json({ message: "User Not Found"});

        const isPasswordCorrect = await bcrypt.compare(password, User.password);

        if(!isPasswordCorrect) return res.status(400).json({messsge: 'Password Wrong!!!'});

        const token = jwt.sign({ email: User.email, id: User._id }, 'test', { expiresIn: '1h'});

        res.status(200).json({ result: User, token});
    } catch (error) {
        res.status(500).json({ message: "something went wrong||"});
    }
}

export const SignUp = async ( req, res ) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try{
        const User = await userSchema.findOne({ email });

        if(User) return res.status(400).json({ message: "User Already Exists"});
        
        if(password !== confirmPassword) return res.status(400).json({ message: "Password Doesnt Match"});
        
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await userSchema.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})
        
        const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: '1h'});

        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: "something went wrong||"});
    }
}

export const GoogleSignUp = async (req, res) => {
    const { email, givenName, googleId, imageUrl, name } = req.body;

    try {
        const User =  await userSchema.findOne({ email });

        if(!User) {
            const result = await userSchema.create({ email, password: '', name: givenName, imageURL: imageUrl });

            return res.status(200).json({ message: 'Success' });
        }

        if(User.password === "") return res.status(200).json({ message: 'Success' });

        res.status(400).json({ message: "User Already Exists With Same Id" });

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!!!"});
    }
}