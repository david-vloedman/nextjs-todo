import nextConnect from "next-connect";
import middleware from "../../../middleware/database"

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    // const doc = await req.db.collection("task").findOne();
    const doc = await req.db.collection("task").findOne(req.taskId || null);
    console.log(doc);
    res.status(200).end(JSON.stringify(doc));
    
});

handler.post(async (req, res) => {

});

handler.put(async (req, res) => {

});

handler.delete(async (req, res) => {

});

export default handler;


