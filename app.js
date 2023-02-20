const express = require("express");
const app = express();
const port = 3000;
const sql = require("mssql");
var dbConfig =
  "Server=tcp:sql-db-01-ea.database.windows.net,1433;Database=db-010-ea;Uid=dbadmin;Pwd=P@ssw0rd;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;";

app.get("/", (req, res) => {
  sql
    .connect(dbConfig)
    .then((pool) => {
      return pool.request().query("select @@VERSION");
    })
    .then((result) => console.log(result));
  res.send("data");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
