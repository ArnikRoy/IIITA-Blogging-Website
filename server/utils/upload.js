
// const { GridFsStorage } = require('multer-gridfs-storage');
// const dotenv = require('dotenv')
// const multer = require('multer')

// dotenv.config()

// const username = process.env.DB_USERNAME
// const password = process.env.DB_PASSWORD

// const storage = new GridFsStorage({
//     url : `mongodb+srv://${username}:${password}@cluster0.i3x1qhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
//     options : { useNewUrlParser : true},
//     file : (request, file)=> {
//         const match = ['image/png', 'image/jpg', 'image/jpeg']

//         if(match.indexOf(file.mimeType) === -1){
//             return `${Date.now()}-blog-${file.originalname}`
//         }
//         return {
//             bucketName : "photos",
//             filename : `${Date.now()}-blog-${file.originalname}`
//         }
//     }
// })

// module.exports = multer({ storage });

// middleware/upload.js
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configure the AWS environment
AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        // acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const extension = file.originalname.split('.').pop();
            cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
        }
    })
});

module.exports=upload;