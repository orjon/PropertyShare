import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  mongoose.set('strictQuery', true) // allow only specified fields

  // if already connected - don't connect again.
  if (connected) {
    console.log('MongoDB is already connected')
    return
  }

  // connect to MongoDB
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
