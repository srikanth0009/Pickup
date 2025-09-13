
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log('database connected'))
        await mongoose.connect(`${process.env.MONGODB_URL}/pingup`)
    } catch (error) {
        console.log(error.message)
    }
}

//Database

export default connectDB