import {MongoClient} from "mongodb"
import nextConnect from "next-connect"

const connectionString = `mongodb+srv://application:${process.env.database.password}@cluster0.kzwbe.mongodb.net/${process.env.database.name}?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next){
  if(!client.isConnected()) await client.connect();
  
  req.dbClient = client;
  req.db = client.db("todo-list");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;