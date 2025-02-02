const grid = require('gridfs-stream')
const mongoose = require('mongoose')
const url = 'http://localhost:8000'

let gfs,gridfsBucket
const conn = mongoose.connection
conn.once('open', ()=> {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName : 'fs'
    })
    gfs = grid(conn.db, mongoose.mongo)
    gfs.collection('fs')
})

const uploadImage= (request,response) => {
    if(!request.file){
        return response.status(404).json({ msg : 'File not found!'})
    }

    // const imageUrl = `${url}/file/${request.file.filename}`
    const imageUrl = request.file ? request.file.location:null;

    return response.status(200).json(imageUrl)
}

const getImage = async(req, res) => {
    try {
        const file = await gfs.files.findOne({ filename : req.params.filename})
        const readStream = gridfsBucket.openDownloadStream(file._id)
        readStream.pipe(res)
    } catch (error) {
        return res.status(500).json({ msg : error.message})
    }
}

module.exports = {uploadImage, getImage}