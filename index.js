const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT|| 5000
// medilware
app.use(cors())
app.use(express.json())

// FHxUKPfqLWoNoWEa
// masud24861

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.kaocfbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    










    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World! masud')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})