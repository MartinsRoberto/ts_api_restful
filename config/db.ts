import mongoose, { mongo } from "mongoose"
import config from "config"

async function connect() {
  const dbUrl = config.get<string>('dbUrl')

  try {
    await mongoose.connect(dbUrl)
    console.log('Connected to database')
  } catch (error) {
    console.log(error)
  }
}

export default connect