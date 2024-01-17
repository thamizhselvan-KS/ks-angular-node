import { MongoClient,ServerApiVersion } from "mongodb";
import mySql from 'mysql2';

export class DataBases {
  constructor() {}
  mongoConnection() {
    let mongoCredentials = {
      url: `mongodb+srv://thamizhselvankannan:4U9WEYXGn5Krgu6a@cluster-test-node-proje.qovg7ss.mongodb.net/learner-node-project-db?retryWrites=true&w=majority`,
    };
    // mongo db connection start
    const client = new MongoClient(mongoCredentials.url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    const database = client.db("learner-node-project-db");
  
    async function runDatabase() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("learner-node-project-db").command({ ping: 1 });
        console.log(
          `Pinged your deployment. You successfully connected to MongoDB ${database.databaseName}!`
        );
      } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
      }
    }
    runDatabase().catch(console.dir);
    // mongo db connection end
  }
  
  sqlConnection() {
    let mySqplCredentials = {
      hostName: "training-db01.kosoft.co",
      userName: "db_admin",
      passWord: "L33$pr1ng$",
      databaseName: "testdb",
      port: 3306,
    };
  
    const sql = mySql.createConnection({
      host: mySqplCredentials.hostName,
      user: mySqplCredentials.userName,
      password: mySqplCredentials.passWord,
      port: mySqplCredentials.port,
      database: mySqplCredentials.databaseName,
    });
    sql.connect(function (err: any) {
      if (err) {
        console.log(err);
      }
      console.log("Connected to MySQL!");
    });
  }
}
