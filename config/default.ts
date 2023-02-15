const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
  dbUrl: `mongodb+srv://${dbUser}:${dbPass}@cluster0.nxy0zkr.mongodb.net/?retryWrites=true&w=majority`,
}