const  mongoose  = require("mongoose")
const mongodb = require('mongodb')


const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.i3x1qhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true })
        console.log('Database connected!')
    } catch (error) {
        console.log('Database failed to connect!',error)
    }
}

module.exports = Connection

