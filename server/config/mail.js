import nodemailer from 'nodemailer'
import { createRequire } from "module";
const require = createRequire(import.meta.url); // construct the require method
const config = require("./config.json");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.email,
        pass: config.password,
    },
});

export default transporter;