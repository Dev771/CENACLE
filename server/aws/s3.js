import dotenv from 'dotenv';
import fs from 'fs';
import AWS from 'aws-sdk';


dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey
});

export const upload = (file) => {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = ({
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    })

    return s3.upload(uploadParams).promise();
}

export const getFile = (FileKey) => {
    const downloadParams = {
        Key: FileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream();
}