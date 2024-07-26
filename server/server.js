import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const db = new pg.Pool({ connectionString: process.env.DBCONECTION });
app.get("/", (req, res) => {
  res.send("server root route");
  // test pass
});

//get message history from database
app.get("/messages", async function (req, res) {
  const result = await db.query(`SELECT * FROM messages`);
  const messages = result.rows;
  res.json(messages);
  //generate message history
});
//send post request from form to server and respond to confitm submition test pass
app.post("/messages", (req, res) => {
  console.log(req.body);
  res.json("form submited");
  //add form message to the database
  db.query(`INSERT INTO messages (name, message, emoji) VALUES ($1,$2,$3)`, [
    req.body.name,
    req.body.message,
    req.body.emoji,
  ]);
});

app.delete("/messages", (req, res) => {
  db.query(`DELETE * FROM messages WHERE id = req.body.id `);
});

//add a delete button

app.listen("8080", () => {
  console.log("listening to port 8080");
});
