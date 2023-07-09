import { MongoClient, Db, Collection } from 'mongodb'
import { config } from 'dotenv'
import User from '../models/schemas/User.schema'
config()
console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_NAME)
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9bcmwrn.mongodb.net/`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Connnected successfully')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}
const databaseService = new DatabaseService()

export default databaseService
