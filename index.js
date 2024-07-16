const express = require('express');
const cors = require('cors');
require("dotenv").config()
// const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000
const app = express()

// midleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())

// const varifyToken = (req, res, next) => {
//   const Token = req.cookies.token
//   if (!Token) {
//     return res.status(401).send({ message: "Unauthorize access" })
//   }
//   jwt.verify(Token, process.env.ACCE_TOKEN, function (err, decoded) {
//     if (err) {
//       return res.status(401).send({ message: "Unauthorize access" })
//     }
//     req.user = decoded
//     next()
//   });

// }
// mongodb
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.kaocfbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Send a ping to confirm a successful connection
    const usersCollection = client.db("FinancialDB").collection("users")

    app.post("/user", async (req, res) => {
      const user = req.body
      console.log(user)
      const result = await usersCollection.insertOne(user)
      res.send(result)

  })








    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  console.log("hello")
  res.send("helo solosphere gffhgfh")
})


app.listen(port, () => console.log(`server is running ${port}`))