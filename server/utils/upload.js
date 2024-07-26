
const { GridFsStorage } = require('multer-gridfs-storage');
const dotenv = require('dotenv')
const multer = require('multer')

dotenv.config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const storage = new GridFsStorage({
    url : `mongodb+srv://${username}:${password}@cluster0.i3x1qhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    options : { useNewUrlParser : true},
    file : (request, file)=> {
        const match = ['image/png', 'image/jpg', 'image/jpeg']

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`
        }
        return {
            bucketName : "photos",
            filename : `${Date.now()}-blog-${file.originalname}`
        }
    }
})

module.exports = multer({ storage });