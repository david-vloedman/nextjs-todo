import nextConnect from "next-connect";
import middleware from "../../../middleware/database"

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    // const doc = await req.db.collection("task").findOne();
    res.status(200).json({
        title: "test",
        details: "details"
    });
    
});

handler.post(async (req, res) => {

});

handler.put(async (req, res) => {

});

handler.delete(async (req, res) => {

});

export default handler;


