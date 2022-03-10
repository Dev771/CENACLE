import transporter from '../config/mail.js';
import ejs from 'ejs';

export const email_Confirmation = (data, cb) => {
    ejs.renderFile('C:\\Users\\user\\Desktop\\My Projects\\Coding Projects\\React Projects\\frontend\\server\\views\\emailconfirmtion.ejs', { randomNumber: data.randomNumber, name: data.name }, (err, done) => {
        if (err) return cb({ status: 'err', msg: "Error While Rendering" });
        else {
            var mail = {
                from:  'Cenacle TechLab cenacletechlab@gmail.com',
                to: data.email,
                subject: `${data.randomNumber}`,
                text: `${data.randomNumber}`,
                html: done,
            }
            transporter.sendMail(mail, (err, sent) => {
                if (err) return cb({ status: "err", msg: err });
                else return cb({ status: "scc", msg: "Msg Sent Successfully" });
            });
        }
    });
}
