import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"


// import dotenv from 'dotenv'

// dotenv.config()

// const bucketName = process.env.AWS_BUCKET_NAME
// const region = process.env.AWS_BUCKET_REGION
// const accessKeyId = process.env.AWS_ACCESS_KEY
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

// const s3Client = new S3Client({
//     region,
//     credentials: {
//         accessKeyId,
//         secretAccessKey
//     }
// })

// export function uploadFile(fileBuffer, fileName, mimetype) {
//     const uploadParams = {
//         Bucket: bucketName,
//         Body: fileBuffer,
//         Key: fileName,
//         ContentType: mimetype
//     }

//     return s3Client.send(new PutObjectCommand(uploadParams));
// }

