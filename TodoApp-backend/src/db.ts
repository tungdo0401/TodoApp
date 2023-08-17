import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://TodoTask:abcde54321@todotask.bgyvrf3.mongodb.net/TodoApp?retryWrites=true&w=majority"
        )
        if (connection) {
            console.log('Connection established')
        }
    } catch (error) {
        console.log('error',error)
        throw error
    }
}

export default connectToDb